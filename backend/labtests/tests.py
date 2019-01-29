from .models import LabTest
from rest_framework.test import APITestCase


class LabTestTest(APITestCase):
    # Tests for creating, reading, updating and deleting labtests

    url = '/lab/api/labtests/'

    def setUp(self):
        self.labtest = LabTest.objects.create(symbol='P-CRP', name='CRP', reference_ranges='Alle 3', unit='mg/l')

    # CREATE
    # Can create test
    def test_add_labtest(self):
        response = self.client.post(self.url,
                                    {
                                        "symbol": "P-CRP",
                                        "name": "CRP",
                                        "reference_ranges": "Alle 3",
                                        "unit": "mg/l"
                                    })
        self.assertEqual(201, response.status_code)
        self.assertEqual("P-CRP", response.data['symbol'])
        self.assertEqual("CRP", response.data['name'])
        self.assertEqual("Alle 3", response.data['reference_ranges'])
        self.assertEqual("mg/l", response.data['unit'])

    # READ
    # Can get all labtests
    def test_get_labtests(self):
        response = self.client.get(self.url)
        self.assertEqual(200, response.status_code)

    # Can get one labtest
    def test_get_labtest(self):
        response = self.client.get(self.url + str(self.labtest.id) + '/')
        self.assertEqual(200, response.status_code)

    # UPDATE
    def test_update_labtest(self):
        response = self.client.put(self.url + str(self.labtest.id) + '/',
                                   {
                                        "symbol": "P-CRP",
                                        "name": "C-reaktiivinen proteiini",
                                        "reference_ranges": "Alle 3",
                                        "unit": "mg/l"
                                    })
        # Update can be done
        self.assertEqual(200, response.status_code)
        # Update is done correctly
        self.assertEqual("C-reaktiivinen proteiini", response.data['name'])

    # DELETE
    # Can delete labtest
    def test_delete_labtest(self):
        response = self.client.delete(self.url + str(self.labtest.id) + '/')
        self.assertEqual(204, response.status_code)
