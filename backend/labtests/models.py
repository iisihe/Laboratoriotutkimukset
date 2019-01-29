from django.db import models


class LabTest(models.Model):
    # Tutkimuksen tunnus
    symbol = models.CharField(max_length=20, default="-")
    # Tutkimuksen nimi
    name = models.CharField(max_length=200)
    # Tuloksen viitearvot
    reference_ranges = models.CharField(max_length=500, default="-")
    # Tutkimuksen yksikkö
    unit = models.CharField(max_length=20)

    def __str__(self):
        return self.name
