from django import forms
from .models import *

class categoriaForm(forms.ModelForm):
    class Meta:
        model = categorias
        fields = '__all__'

class cuentaForm(forms.ModelForm):
    class Meta:
        model = Cuenta
        fields = '__all__'

class coleccionesForm(forms.ModelForm):
    class Meta:
        model = Colecciones
        fields = '__all__'

class ProductosForm(forms.ModelForm):
    class Meta:
        model = Productos
        fields = '__all__' 