#REGISTRO DE MODELOS 
from django.contrib import admin
from .models import *

#Registro para que el administrador acceda a las secciones
admin.site.register(categorias)
admin.site.register(Cuenta)
admin.site.register(Colecciones)
admin.site.register(Productos)