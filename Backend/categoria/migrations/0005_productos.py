# Generated by Django 5.0.3 on 2024-03-07 20:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categoria', '0004_colecciones'),
    ]

    operations = [
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('codigo', models.CharField(max_length=5, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('descripcion', models.CharField(max_length=250)),
                ('precio', models.FloatField()),
                ('stock', models.IntegerField()),
            ],
            options={
                'db_table': 'productos',
                'managed': False,
            },
        ),
    ]