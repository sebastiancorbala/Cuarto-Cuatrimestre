from django import forms
from .models import Usuarios, Categorias, Productos, Pedidos

class UsuarioForm(forms.ModelForm):
    class Meta:
        model = Usuarios
        fields = '__all__'

class CategoriaForm(forms.ModelForm):
    class Meta:
        model = Categorias
        fields = '__all__'
        
class ProductoForm(forms.ModelForm):
    class Meta:
        model = Productos
        fields = ['IDProducto', 'NombreProducto', 'Descripcion', 'Precio', 'IDCategoria']

class PedidoForm(forms.ModelForm):
    class Meta:
        model = Pedidos
        fields = '__all__'