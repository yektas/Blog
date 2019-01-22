import graphene
from django.contrib.auth.models import User
from graphene_django.converter import convert_django_field
from graphene import relay, ObjectType, InputObjectType, String
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from taggit.managers import TaggableManager

from comments.models import Comment
from posts.models import Post, Category


@convert_django_field.register(TaggableManager)
def convert_field_to_string(field, registry=None):
    return String(description=field.help_text, required=not field.null)

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
        interfaces = (relay.Node,)
        filter_fields = {
            'title': ['exact', 'istartswith'],
            'author': ['exact'],
            'category': ['exact'],
        }



class PostCreateInput(InputObjectType):
    """
    Class defined to accept input data
    from the interactive graphql console.
    """
    title = graphene.String(required=True)
    excerpt = graphene.String(required=True)
    content = graphene.String(required=True)
    category_name = graphene.String(required=True)
    author_id = graphene.ID(required=True)

def update_create_instance(post_data):

    author = User.objects.get(id=post_data.author_id)
    category = Category.objects.get(name=post_data.category_name)
    post, _ = Post.objects.get_or_create(title=post_data.title,
                                      excerpt=post_data.excerpt,
                                      content=post_data.content,
                                      author=author,
                                      category=category
                                      )
    return post

class CreatePost(graphene.Mutation):
    class Arguments:
        post = graphene.Argument(PostCreateInput)

    new_post = graphene.Field(PostNode)

    def mutate(self, info, post):
        new_post = update_create_instance(post)  # use custom function to create book

        return CreatePost(new_post=new_post)  # newly created post instance returned.


class Mutation(graphene.AbstractType):
    create_post = CreatePost.Field()


class Query(ObjectType):
    post = graphene.Field(PostNode, id=graphene.ID(required=True))
    all_posts = DjangoFilterConnectionField(PostNode)

