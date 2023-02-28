# Napptilus

## Ejecución
Para ejecutar la aplicación se deberá ejecutar el comando `npm run start`. La aplicación se ejecutará en el puerto `3000`

## Consideraciones
Si desde la API no se recibe el precio de un item aparecerá "Sin precio" en vez mostrar el precio.
El contador del carrito se encuentra almacenado tanto en Redux como en almacenamiento local.
En el almacenamiento local se alamcenan 3 variables, las cuales se borran cada hora:
    - items: el total de los items recibidos de la API.
    - cart: la cantidad de elementos en el carrito.
    - cartItems: un listado de los items añadidos en el carrito.
    - loadTime: la fecha de carga de datos, para poder calcular cuando ha pasado 1 hora para refrescar todos los campos.

