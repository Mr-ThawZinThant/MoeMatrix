from django.urls import path
from .views import MyApiView

urlpatterns = [
    path('my-api-endpoint/', MyApiView.as_view(), name='my-api-endpoint'),
    # Add more URL patterns as needed
]