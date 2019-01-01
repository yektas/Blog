from graphene import relay
from graphene_django import DjangoObjectType
import graphene
from graphene_django.filter import DjangoFilterConnectionField

from posts.models import Post


class PostsType(DjangoObjectType):
    class Meta:
        model = Post
        #filter_fields = {'title': ['icontains'] }
        #interfaces = (relay.Node, )


class Query(graphene.AbstractType):
    #all_posts = DjangoFilterConnectionField(PostsType)
    all_posts = graphene.List(PostsType)

    def resolve_all_posts(self, info, **args):
        return Post.objects.all()