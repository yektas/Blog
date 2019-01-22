import json

from django.contrib.contenttypes.models import ContentType
from django.shortcuts import render

from comments.models import Comment
from posts.models import Post


def deneme(request):
    post = Post.objects.first()
    comments = post.comments
    return render(request, "test.html", {"comments": comments})