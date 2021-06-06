# BOTnifacio

## 1. ¿Qué es BOTnifacio?

- Es un proyecto de **_bot_ para Discord** que funciona sobre un servidor express en NodeJS.

  _**BOTnifacio**_ se encargará de facilitar a los usuarios un ejemplo de la etiqueta HTML que éstos soliciten, por ejemplo:
  `!html a`

  Siendo `!` el prefijo para lanzar el comando, `html` el comando y `a` el argumento, es decir, la etiqueta de la que queremos ver un ejemplo.

- La funcionalidad principal del proyecto se centra en crear la estructura que permitirá añadir, editar y eliminar de la BBDD los comandos que tendrán disponibles los usuarios para interactuar con **_BOTnifacio_**.

  Estas acciones las podrán realizar únicamente los usuarios que posean el role de _admin_.

- Siguiendo la arquitectura de capas, el proyecto divide su funcionalidad en varias capas bien diferenciadas:

  - Modelos
  - Repositorios
  - Servicios
  - Rutas.

## 2. Librerías instaladas:

- express
- sequelize
- mysql2
- dotenv
- joi
- jsonwebtoken
-
- nodemon (**desarrollo**)

## 3. Entidades:

Se han definido dos entidades en el proyecto: `User` y `Command`.

1.  `User` permitirá el registro y login de usuarios, solicitando únicamente la información necesaria:

    - **id**: generada con un UUID v4.
    - **email**: campo único con un límite de 50 caracteres.
    - **password**: se almacenará la password **_encriptada_**.
    - **role**: únicamente se podrán introducir los valores de _admin_ y _user_, siendo este último el valor por defecto.

1.  `Command` se utilizará para la creación de los comandos/mensajes que tendrá _BOTnifacio_ como respuesta a la interacción con los usuarios.
    Además, se podrán editar y eliminar:
    - **id**: generada con un UUID v4.
    - **command**: límite de 12 caracteres.
    - **arg**: límite de 20 caracteres.
    - **message**: límite provisional de 500 caracteres

## 4. Características implementadas

- `Encrypt password`: Utilizando la librería _**crypto**_ y un _**SALT**_ se encriptan las contraseñas de los usuarios para añadir un extra de seguridad.
- `Role validation`: Permitiendo el acceso a distintas secciones según el role que tenga el usuario.
- `Error handler`: Middleware manejador de errores.
- `Http Error`: Clase extendida de _Error_ para personalizar los mensajes de error, pudiendo indicar el status code y un mensaje.
- `Token validation`: Generación y validación del token de autorización.

---
