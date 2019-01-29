# Laboratoriotutkimukset

Työkalu laboratoriomittausten ylläpitoon:
- Tutkimusten hakeminen
- Tutkimuksen lisääminen
- Tutkimuksen muokkaaminen
- Tutkimuksen poistaminen

REST API -kutsut:
- GET: http://localhost:8000/lab/api/labtests/
- GET: http://localhost:8000/lab/api/labtests/{id}/
- POST: http://localhost:8000/lab/api/labtests/
- PUT: http://localhost:8000/lab/api/labtests/{id}/
- DELETE: http://localhost:8000/lab/api/labtests/{id}/

## Käyttöönotto
### Backend
Vaatimus: Python 3 ja virtualenv asennettuna.
```
cd backend
virtualenv env --no-site-packages
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py makemigrations
python manage.py runserver
```
### Frontend
Vaatimus: Node 11 asennettuna.
```
cd frontend
npm install
npm start
```
Sovellus aukeaa osoitteessa http://localhost:3000/

## Kuvia
![Screenshot 1](https://github.com/iisihe/Laboratoriotutkimukset/blob/master/screenshots/Screenshot1.png)
![Screenshot 2](https://github.com/iisihe/Laboratoriotutkimukset/blob/master/screenshots/Screenshot2.png)
![Screenshot 3](https://github.com/iisihe/Laboratoriotutkimukset/blob/master/screenshots/Screenshot3.png)
