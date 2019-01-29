from rest_framework import viewsets
from .serializers import LabTestSerializer
from .models import LabTest


class LabTestView(viewsets.ModelViewSet):
    serializer_class = LabTestSerializer
    queryset = LabTest.objects.all()
