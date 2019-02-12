from django.contrib.auth.models import User as UserModel
from graphene import relay
from graphene_django import DjangoObjectType


class User(DjangoObjectType):
    """
    User Node
    """

    class Meta:
        model = UserModel
        filter_fields = {
            'email': ['exact', ]
        }
        exclude_fields = ('password', 'is_superuser',)
        interfaces = (relay.Node,)
