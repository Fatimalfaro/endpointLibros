
# Conceptos de Node Js 

Este proyecto es una práctica de backend, donde implementareamos middlewares, endpoints y fue construido con pnpm como gestor de paquetes.

## Demo del backend
Podes ver una demo del proyecto en producción [aqui](https://conceptos-nodejs-eight.vercel.app/)

## Librerias utilizadas
- Node js v24.4 o cualquier version posterior a la 22.
- ExpressJS
- Cors
- Morgan

## Instalación y configuración del proyecto
1- Clonar el repositorio
`git clone https://github.com/Fatimalfaro/endpointLibros.git`

2- Instalar las dependencias
`pnpm install`

3- Iniciar aplicación:
```bash 
#comando de producción
pnpm start

#comando de desarrollo
pnpm run dev

```
## Endpoints
```bash
#Metodo: GET
/api/libros
#Descripción: Este endpoint devuelve los libros cargados

#Metodo: GET
/api/libros/id
#Desripción: Este endpoint devuelve un libro segun el id ingresado

#Metodo: POST
/api/libros
#Desripción: Este endpoint permite agregar un libro un libro

#Metodo: DELETE
/api/libros/id
#Desripción: Este endpoint permite eliminar un libro segun el id ingresado
```
# Autor
Alfaro Fátima