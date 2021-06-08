![Logo BOTnifacio](https://res.cloudinary.com/h3rmenegild0/image/upload/v1623144315/poseidon/botnifacio_hnyqjp.png)

## 1. ¿Qué es BOTnifacio? 🤖

- Es un proyecto de **_bot_ para Discord** que funciona sobre un servidor express creado como práctica para las clases de Node.js.

  _**BOTnifacio**_ 🤖 se encargará de facilitar a los usuarios un ejemplo de la etiqueta HTML que éstos soliciten, por ejemplo:
  `!html a`

  Siendo `!` el prefijo configurado por defecto para lanzar el comando, `html` el comando y `a` el argumento, es decir, la etiqueta de la que queremos ver un ejemplo, teniendo un resultado similar al siguiente ejemplo:

  ```
  <a href='http://www.destiny-link.com' target='_parent' title='Destiny title'>Destiny title</a>
  ```

- La funcionalidad principal del proyecto se centra en crear la estructura que permitirá añadir, editar y eliminar de la BBDD los comandos que tendrán disponibles los usuarios para interactuar con **_BOTnifacio_** 🤖.

  Estas acciones las podrán realizar únicamente los usuarios que posean el role de _admin_.

- Siguiendo la arquitectura de capas, el proyecto divide su funcionalidad en varias capas bien diferenciadas:

  - Modelos
  - Repositorios
  - Servicios
  - Rutas

---

## 2. Librerías instaladas:

- express
- sequelize
- mysql2
- dotenv
- joi
- jsonwebtoken
- discord.js
- nodemon (**desarrollo**)

---

## 3. Entidades:

Se han definido dos entidades en el proyecto: `User` y `Command`.

1.  `User` permitirá el registro y login de usuarios, solicitando únicamente los datos necesarios para poder realizar el login:

    - **id**: generada automáticamente con un UUID v4.
    - **email**: campo único con un límite de 50 caracteres.
    - **password**: se almacenará la password **_encriptada_**.
    - **role**: únicamente se podrán introducir los valores de _admin_ y _user_, siendo este último el valor por defecto.

- #### Para los usuarios, existirán dos rutas:
  - `/signup` para la creación de la cuenta.
  - `/login` para conectarse a la cuenta y poder realizar acciones.

2.  `Command` se utilizará para la creación de los comandos/mensajes que tendrá _BOTnifacio_ 🤖 como respuesta a la interacción con los usuarios.
    Además, se podrán editar y eliminar:
    - **id**: generada con un UUID v4.
    - **command**: límite de 12 caracteres.
    - **arg**: límite de 20 caracteres.
    - **message**: límite provisional de 500 caracteres

- #### Para los comandos, existirán las siguientes rutas:
  - GET `/all` para mostrar todos los comandos registrados.
  - GET `/:id` para mostrar un comando buscando por su _id_. Ésta debe indicarse en la URL
  - POST `/` para la creación de nuevos comandos.
  - PUT `/` para modificar los comandos, utilizando su _id_. Ésta debe incluirse en _req.body_
  - DELETE`/` para eliminar comandos indicando su _id_

---

## 4. Características implementadas

- `Encrypt password`: Utilizando la librería _**crypto**_ y un _**SALT**_ se encriptan las contraseñas de los usuarios para añadir un extra de seguridad.
- `Role validation`: Permitiendo el acceso a distintas secciones según el role que tenga el usuario.
- `Error handler`: Middleware manejador de errores.
- `Http Error`: Clase extendida de _Error_ para personalizar los mensajes de error, pudiendo indicar el status code y un mensaje.
- `Token validation`: Generación y validación del token de autorización.

---

## 5. ¿Cómo utilizo BOTnifacio 🤖?

Cuando hayas clonado el repositorio, el primer paso será instalar las dependencias necesarias.

Para ello, debes ejecutar la siguiente línea:

`npm i`

Posteriormente, utiliza el script `start` para iniciar el proyecto:

`npm start`

## 6. ¿Necesito configurar algún dato o variable para que funcione?

#### **Sí**. El proyecto necesita utilizar algunas variables de entorno para su correcto funcionamiento.

El nombre de las variables de entorno necesarias se incluyen en el fichero `.env-template`.

Tendrás que crear un fichero `.env` en la carpeta raíz del proyecto y configurar las variables indicadas en el fichero _.env-template_.

Además de estos datos, tendrás que realizar las siguientes acciones para crear el bot **Y OBTENER EL TOKEN**:

1. Estar logueado en la web de Discord.
1. Dirigirte a la página de _aplicación_ https://discord.com/developers/applications
1. Click en el botón "New Application"
1. Dar un nombre y pulsar "_Create_"
1. Ir a la pestaña "_Bot_" y pulsar "_Add Bot_". Deberás confirmar haciendo clic en "_Yes, do it!_"

   Deja la configuración por defecto en _Public Bot_ (checked) y _Require OAuth2 Code Grant_ (unchecked)

1. Copia el Token y **NO lo compartas con nadie**.

1. #### Invitar a tu bot a unirse al servidor:

   1. Ve a la pestaña "_OAuth2_" y selecciona _**bot**_ en la sección _scopes_
   1. Ahora, establece los permisos para tu bot, por ejemplo:
      ![Logo BOTnifacio](https://www.freecodecamp.org/news/content/images/size/w1600/2020/11/image-124.png)
   1. Una vez finalices de seleccionar los permisos:

      1- **COPIA** el enlace que aparece en la parte superior

      2- Pégalo en la barra de direcciones de tu navegador

      3- Selecciona a qué servidor quieres invitar al bot y haz click en "_Authorize_"
