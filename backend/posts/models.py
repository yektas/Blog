import os
from django.contrib.contenttypes.models import ContentType
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.db.models.signals import pre_save
from taggit.managers import TaggableManager

from comments.models import Comment
from posts.utils import unique_slug_generator


def upload_file(instance, filename):
    name, extension = os.path.splitext(filename)
    return os.path.join('posts/{}/{}{}').format(instance.slug, "coverImage", extension.lower())


class Post(models.Model):
    author = models.ForeignKey("auth.User", related_name="posts", on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=150)
    excerpt = models.TextField()
    slug = models.SlugField(unique=True, editable=False)
    image = models.ImageField(upload_to=upload_file)
    content = JSONField()
    is_draft = models.BooleanField(default=False)
    published_on = models.DateTimeField(auto_now=True, auto_now_add=False)
    read_time = models.IntegerField(default=0)
    updated_on = models.DateTimeField(auto_now=True, auto_now_add=False)
    category = models.ForeignKey("Category", related_name="posts", on_delete=models.DO_NOTHING)
    tags = TaggableManager()

    def __str__(self):
        return self.title

    @property
    def comments(self):
        content_type = ContentType.objects.get_for_model(Post)
        obj_id = self.id
        return Comment.objects.filter(content_type=content_type, object_id=obj_id)


class Category(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField(unique=True, editable=False)

    def __str__(self):
        return self.name

def post_slug_save(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance, instance.title, instance.slug)

def category_slug_save(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance, instance.name, instance.slug)


pre_save.connect(post_slug_save, sender=Post)
pre_save.connect(category_slug_save, sender=Category)