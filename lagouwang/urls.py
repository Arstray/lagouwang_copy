from django.conf.urls import url,include
from . import views

urlpatterns = [
    url(r'^index/$', views.index),
    url(r'^mess/$', views.mess),
    url(r'^more/$', views.more),
    url(r'^me/$', views.me),
]