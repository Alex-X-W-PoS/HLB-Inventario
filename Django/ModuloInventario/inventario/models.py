from django.db import models

# Create your models here.
class Inventario(models.Model):
    OPCIONES = (('Miligramos', 'mg'), ('Mililitros', 'ml'), ('Pastillas', 'un'), ('Cajas', 'cajas'))
    nombre = models.CharField(max_length=30, blank=False, null=False)
    cantidad = models.PositiveSmallIntegerField(blank=True, null=True)
    unidad = models.CharField(max_length=30, choices=OPCIONES, default='Miligramos', null=False)
    proveedor = models.CharField(max_length=200, blank=True, null=True)
    lote = models.CharField(max_length=50, blank=False, null=False)
    factura = models.CharField(max_length=20, blank=False, null=False)
    fecha_exp = models.DateField(blank=False, null=False)
    costo = models.FloatField(blank=False, null=False)

    class Meta:
        #managed = False
        db_table = 'Inventario'
        unique_together = (('id', 'nombre'),)

class Medicinas(models.Model):
    OPCIONES = (('Miligramos', 'mg'), ('Mililitros', 'ml'), ('Pastillas', 'un'), ('Cajas', 'cajas'))
    nombre = models.CharField(max_length=30, blank=False, null=False)
    unidad_medida = models.CharField(max_length=30, choices=OPCIONES, default='Miligramos', null=False)
    linea = models.CharField(max_length=200, blank=True, null=True)
    codigo = models.CharField(max_length=50, blank=False, null=False)
    cantidad_min = models.PositiveSmallIntegerField(blank=True, null=True)
    codigo_sect = models.CharField(max_length=50, blank=False, null=False)
    aplica_iva = models.BooleanField(blank=False, null=False)