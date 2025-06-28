'''
listas
tuplas
diccionarios
sets
'''

mi_lista=[1,28,3,7,12]
print(type(mi_lista))#<class 'list'>

#cantidad de elementos
print(len(mi_lista))
#uso de pop
print(mi_lista.pop())#12
print(mi_lista)

#reverse
print(mi_lista.reverse())
print(mi_lista)

#append
print(mi_lista.append("f"))
print(mi_lista)

#Dicionarios
estudiantes = {
    "nombre":"andres",
    "edad":21
}
print(type(estudiantes))#<class 'dict'>

#como acceder a un valor
print(estudiantes.get("edad"))
print(estudiantes["edad"])#variable 2 de acceder

#agregar un nuevo par clave valor
estudiantes["ciudad"]="palmira"
print(estudiantes)

mi_conjunto=set()#Constructor de conjuntos
mi_conjunto.add(8)
print(mi_conjunto)