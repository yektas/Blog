import graphene
from posts.schema import Query as posts_query


class Query(
        posts_query,
        graphene.ObjectType):
    pass



schema = graphene.Schema(query=Query)