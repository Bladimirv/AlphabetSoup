# Sopa de letras

Proyecto desarrollado en NodeJs, el detalle de la solucion se centra en encontrar las coordenadas de la letra "O" y partiendo de este punto se realiza un scan en las direcciones posibles segun las dimensiones de la matriz en busqueda de las letras restantes "I", "E".
 
## Instalación

Entrar al directorio ./soup y ejecutar:

```bash
npm i
```

## Uso
Para visualizar los test's unitarios se debe correr el sig comando:

```bash
npm test
```

## Resultado esperado
Se ejecutan los test's y dan como resultado:

```bash
Sopa de letras
    √ prueba 3x3 => Se espera 3
    √ prueba 1x10 => Se espera 4
    √ prueba 5x5 => Se espera 8
    √ prueba 7x2 => Se espera 3
    √ prueba 0x0 => Se espera 0
```
Los test's se pueden verificar en la ruta ./soup/test/*