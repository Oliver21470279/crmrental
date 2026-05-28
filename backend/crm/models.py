from django.db import models

# Create your models here.
class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    first_last_name = models.CharField(max_length=50)
    second_last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.IntegerField()
    address = models.TextField()
