from ckeditor.fields import RichTextField
from django.db import models

class Post(models.Model):
    user = models.ForeignKey("auth.User", related_name="posts", on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    image = models.ImageField()
    content = RichTextField()
    draft = models.BooleanField(default=False)
    publish = models.DateField(auto_now=False, auto_now_add=False)
    read_time = models.IntegerField(default=0)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    category = models.ForeignKey("Category", related_name="posts", on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.title

class Category(models.Model):
    category_name = models.CharField(max_length=40)
    popularity = models.PositiveIntegerField(default=0)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.category_name