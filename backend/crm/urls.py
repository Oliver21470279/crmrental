from django.urls import path, include
from rest_framework import routers
from crm import views


router = routers.DefaultRouter()
router.register(r'crm', views.CustomerView, 'crm')

urlpatterns = [
    path('', include(router.urls)),
]