from django.conf.urls import url
from django.urls import path

from posts import views

app_name = 'posts'

urlpatterns = [

    path('posts', views.deneme, name="deneme")
]