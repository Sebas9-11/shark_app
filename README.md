# Unilibre Shark - Manual Tecnico


## Descripción de la app
Unilibre shark es un aplicación se usó en un espacio del congreso llamo “shark tank”, la finalidad del aplicativo es brindar la posibilidad a estudiantes de registrar sus proyectos de innovación y que dichos proyectos puedan ser consultados por los empresarios invitados al evento, la aplicación está dividida en dos secciones uno para las empresas y otra para los estudiantes de ingeniería.

Link de la aplicación: [Apk Android](https://drive.google.com/file/d/1Z9fHJ8jITgkBgOwEvAQCMk4p3bw6-Yy0/view?usp=sharing)

Link del repositorio: [Github](https://github.com/Sebas9-11/shark_app)

## Funcionalidades
- Registro de usuarios
- Listado de ideas de negocios
- Inversión en ideas de negocios
- Ver el estado de las ideas de negocios en las que se ha invertido


## Tecnologías/Herramientas utilizadas
- Visual Studio
- Java Script con el framework React-Native
- Firebase (Database, Authentication, Storage)

### instalación de Visual Studio Code
1. Descargar Visual Studio Code desde [aquí](https://code.visualstudio.com/Download).
2. Seguir las instrucciones de instalación.
3. Una vez finalizada la instalación, abrir Visual Studio Code.
4. Descargar el paquete de extensiones React Native y React Native Tools desde la tienda de extensiones de Visual Studio Code.

### instalación de NodeJs 
1. Descargar NodeJs desde [aquí](https://nodejs.org/es/download/).
2. Seguir las instrucciones de instalación.
3. Una vez finalizada la instalación, abrir una consola de comandos y ejecutar el comando `node -v` para verificar que se ha instalado correctamente.

### instalación de React-Native 

1. Descargar React-Native desde [aquí](https://archive.reactnative.dev/docs/getting-started).
2. Sigue las instrucciones de la pagina para instalar React-Native

### configuración de Firebase
1. Crear un nuevo proyecto en Firebase.
2. Seleccione "web" como su tipo de aplicación 
3. Registre la app
4. A continuacion se le pedira que agregue el sdk de Firebase al proyecto
5. Guarde las credenciales que le genera Firebase, las cuales son:
```javascript
apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
authDomain:"xxxxxxxxxxxxxxxxxxxxxxxxxx",
projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
appId: "xxxxxxxxxxxxxxxxxxxxxxxxxx"
```
6. Ir al apartado de autenticación y seleccionar como método de autenticación correo eléctronico/contraseña.
7. Ir al apartado de Firebase Storage y crea una base de datos 
8. En el apartado de reglas de la Firebase Storage habilita las operaciones de lectura y escritura
9. Ir al apartado de Storage y crea una Storage Bucket
10. En el apartado de reglas de la Storage Bucket habilita las operaciones de lectura y escritura

## Como correr el proyecto

1. Descargar el repositorio
2. Abrir una terminal en el directorio del proyecto
3. Instale las dependencias con `yarn install` o `npm install`
4. Dentro de la carpeta raíz del proyecto cree un archivo `.ENV`
5. Agregue las credenciales de Firebase al archivo `.ENV`, debe quedar de la siguiente manera:

```javascript
API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxx
AUTH_DOMAIN=xxxxxxxxxxxxxxxxxxxxxxxxxx
PROJECT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
STORAGE_BUCKET=xxxxxxxxxxxxxxxxxxxxxxxxxx
MESSAGING_SENDER_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
APP_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
```

6. Ejecute el proyecto con `yarn start` o `npm start`
7. Descargue la app de Expo Go desde la Play Store en su dispositivo movil
8. Escanear el codigo qr con la app expo en tu dispositivo movil.
9. Esperar a que se compile y cargue la app.

## estructura del proyecto
```bash
├── assets
|-- src
|   ├── components
|   |-- constants
|   |-- navigation
|   |-- screens
|   |-- services
├── App.js
├── app.json
├── app.config.js
├── package.json
├── README.md
```

### assets
En esta carpeta se encuentran los recursos de la aplicación como imagenes, iconos, etc.

### src
En esta carpeta se encuentra el código fuente de la aplicación.

### components
En esta carpeta se encuentran los componentes que se usan de manera global de la aplicación.

### constants
En esta carpeta se encuentran las constantes que se usan de manera global de la aplicación.

### navigation
En esta carpeta se encuentran los archivos de navegación de la aplicación.

### services
En esta carpeta se encuentran el servicio de firebase, el cual se encarga de la comunicación con la base de datos.

### screens
En esta carpeta se encuentran las pantallas de la aplicación.

- auth - Pantalla de autenticación
- judge - Pantalla de jurado
- judgeProfile - Pantallas de perfil del jurado
- user - Pantallas de usuario