import graphene
from django.contrib.auth import get_user_model
from graphene import relay
from graphene_django import DjangoObjectType


class User(DjangoObjectType):
    """
    User Node
    """

    class Meta:
        model = get_user_model()
        filter_fields = {
            'email': ['exact', ]
        }
        exclude_fields = ('password', 'is_superuser',)
        interfaces = (relay.Node,)


class Query(graphene.AbstractType):
    me = graphene.Field(User)
    users = graphene.List(User)

    def resolve_users(self, info):
        return get_user_model().objects.all()

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')

        return user