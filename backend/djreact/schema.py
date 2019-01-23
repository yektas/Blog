import graphene

import posts.schema


class Mutation(
    posts.schema.Mutation,
    graphene.ObjectType):
    pass


class Query(
    posts.schema.Query,
    graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
