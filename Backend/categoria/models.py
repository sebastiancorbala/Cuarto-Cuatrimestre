from django.db import models

#MODELO DE CATEGORIAS
class categorias(models.Model):
    codigo = models.CharField(primary_key=True, max_length=5)
    nombre = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'categorias'

##MODELO DE CUENTA
class Cuenta(models.Model):
    username = models.CharField(primary_key=True, max_length=15)
    email = models.CharField(unique=True, max_length=50, blank=True, null=True)
    contraseña = models.CharField(max_length=15)

    class Meta:
        managed = False
        db_table = 'cuenta'
        
#MODELO DE COLECCIONES
class Colecciones(models.Model):
    codigo = models.CharField(primary_key=True, max_length=5)
    nombre = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=200)
    categoria = models.ForeignKey(categorias, models.DO_NOTHING, db_column='categoria', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'colecciones'

#MODELO DE PRODUCTOS 
class Productos(models.Model):
    codigo = models.CharField(primary_key=True, max_length=5)
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=250)
    precio = models.FloatField()
    stock = models.IntegerField()
    colecciones = models.ForeignKey(Colecciones, models.DO_NOTHING, db_column='colecciones')

    class Meta:
        managed = False 
        db_table = 'productos'
