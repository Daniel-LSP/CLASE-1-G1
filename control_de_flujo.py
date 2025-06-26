'''
if
elif
else

---
match case cse _

'''
#Python es un lenguaje identado
x=2
if x==2:
    print("cumple")

#if de multiples condiciones
if x==3:
    print("primera salida")
elif x=="2":
    print("segunda salida")
elif x==4:
    print("tercera salida")
else:
    print("no se cumplio ninguna")

#OPERADORES LOGICOS
#and or 

if 100>10 and 10==10:
    print("doble condicion y se cumple")

if 100>10000 or 10==10:
    print("condicon o se cumple")

#USO DE MATCH case case

opcion=2

match opcion:
    case 1:
        print("Caso 1")
    case 2:
        print("caso 2")
    case 3:
        print("Caso por defecto")