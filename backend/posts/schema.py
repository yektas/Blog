import graphene
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
from django.contrib.auth.models import User
from graphene import relay, ObjectType, InputObjectType, String, Boolean
from graphene_django import DjangoObjectType
from graphene_django.converter import convert_django_field
from graphene_file_upload.scalars import Upload
from graphql import GraphQLError
from graphql_jwt.decorators import login_required
from taggit.managers import TaggableManager

from comments.models import Comment
from posts.models import Post, Category


@convert_django_field.register(TaggableManager)
def convert_field_to_string(field, registry=None):
    return String(description=field.help_text, required=not field.null)


class CategoryNode(DjangoObjectType):
    class Meta:
        model = Category
        interfaces = (relay.Node,)

class CommentNode(DjangoObjectType):
    class Meta:
        model = Comment
        interfaces = (relay.Node,)


class AuthorNode(DjangoObjectType):
    class Meta:
        model = User
        interfaces = (relay.Node,)


class PostNode(DjangoObjectType):
    comments = graphene.List(CommentNode)

    class Meta:
        model = Post


class PostCreateInput(InputObjectType):
    """
    Class defined to accept input data
    from the interactive graphql console.
    """
    id = graphene.String(required=False)
    title = graphene.String(required=True)
    excerpt = graphene.String(required=False)
    content = graphene.String(required=True)
    image = Upload(required=True)
    category_name = graphene.String(required=True)
    author = graphene.String(required=True)


def update_create_instance(post_data):
    post_id = post_data.id
    author = User.objects.get(email=post_data.author)
    category = Category.objects.get(name=post_data.category_name)
    if post_id is not None:
        print("a")
        # TODO update post with id.
    post, _ = Post.objects.get_or_create(title=post_data.title,
                                         excerpt=post_data.excerpt,
                                         content=post_data.content,
                                         author=author,
                                         category=category
                                         )

    POSTS_PREFIX="My-Blog/posts/"
    image_upload_response = upload(
        post_data.image,
        public_id="cover-image",
        folder="{}{}".format(POSTS_PREFIX, post.slug),
        format="jpg",
        secure=True
    )

    post.image, _ = cloudinary_url(image_upload_response["public_id"],
                                format="jpg",
                                secure=True, shorten=True)

    thumbnail_url, _ = cloudinary_url(image_upload_response["public_id"],
                                            format="jpg", secure=True,
                                            crop="thumb", shorten=True, width=200)
    post.thumbnail_url = thumbnail_url
    post.save()

    return post


class CreatePost(graphene.Mutation):
    class Arguments:
        post = graphene.Argument(PostCreateInput)

    new_post = graphene.Field(PostNode)

    #    @login_required
    def mutate(self, info, post):
        new_post = update_create_instance(post)  # use custom function to create post

        return CreatePost(new_post=new_post)  # newly created post instance returned.


class DeletePost(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    ok = Boolean()
    # @login_required
    def mutate(self, info, id):
        user = info.context.user
        try:
            post = Post.objects.get(id=id)
        except Post.DoesNotExist:
            raise GraphQLError("No matching post")
        if post.author != user:
            raise GraphQLError('You are not the author of this post')
        post.is_draft = True # Do not actually delete
        post.save()
        return DeletePost(ok=True)


class Mutation(graphene.AbstractType):
    create_post = CreatePost.Field()
    delete_post = DeletePost.Field()

class Query(ObjectType):
    post = graphene.Field(PostNode, slug=graphene.String())
    all_posts = graphene.List(PostNode)

    def resolve_post(self, info, slug=None, **kwargs):
        if slug:
            return Post.objects.get(slug=slug)

    def resolve_all_posts(self, info, **kwargs):
        return Post.objects.all()