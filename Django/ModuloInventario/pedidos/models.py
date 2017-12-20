from django.db import models

# Create your models here.
class Pedidos(models.Model):
    ESTADO=(('COMP','Completado'),('PROG','En Progreso'),('ESP','En espera'))
    #area_origen
    #area_destino
    #lista_pedido
    #estado
    #tiempo_generado=models.DateTimeField
    #tiempo_contestado=models.DateTimeField
