from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('lab/', include('labtests.urls'), name='labtests'),
]
