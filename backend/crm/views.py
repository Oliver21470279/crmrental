

from rest_framework import viewsets
from .serializer import CustomerSerializer
from crm.models import Customer


# Create your views here.



class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()
