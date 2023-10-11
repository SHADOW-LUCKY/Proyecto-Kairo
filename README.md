# Kairo Project



## Instalación

Asegúrate de tener Node.js instalado en tu sistema antes de continuar. Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install

```

# Conexión a MongoDB

Este archivo contiene una función que se utiliza para conectar a una base de datos MongoDB. La base de datos es un componente fundamental de muchas aplicaciones y se utiliza para almacenar y gestionar datos.

## Función de Conexión

- **Nombre de la Función:** `connect`
- **Descripción:** Esta función utiliza la biblioteca `mongodb` para conectarse a una base de datos MongoDB. Utiliza la URL de conexión que se encuentra en el archivo de configuración `config.js` para establecer la conexión. La función devuelve una instancia de la base de datos, que se puede utilizar para realizar operaciones en la base de datos.

## Uso

Esta función es esencial para establecer una conexión con la base de datos MongoDB en tu aplicación. Antes de utilizarla, asegúrate de que la URL de conexión en el archivo de configuración `config.js` sea correcta y que tengas la biblioteca `mongodb` instalada en tu proyecto.

```javascript
// Ejemplo de cómo utilizar la función de conexión
import connect from './connect.js';

async function someFunction() {
  try {
    const db = await connect();
    // Realizar operaciones en la base de datos utilizando `db`
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
}
```
## Configuración

Este proyecto consta de un archivo `config.js` que maneja la configuración de la aplicación. A continuación, se describen las principales secciones de la configuración:

### Variables de Entorno (Environment Variables)

Este proyecto utiliza variables de entorno para configurar distintos aspectos de la aplicación. Asegúrate de definir estas variables en un archivo `.env` en la raíz del proyecto:
.0

- `PORT456`: El puerto en el que se ejecutará el servidor.
- `MANGOS_URL`: La URL de conexión a la base de datos MongoDB.
- `PK`: La clave privada utilizada en la aplicación.

### Configuración de Express

La función `Global` en `config.js` configura una instancia de Express con varios middleware, incluyendo:

- `morgan("dev")`: Registra las solicitudes HTTP en formato "dev" para el registro.
- `cors`: Configura la política de mismo origen (CORS) para permitir solicitudes desde "http://localhost:3000" con credenciales.
- `express.json()`: Habilita el análisis de datos JSON en las solicitudes entrantes.
- `cookieParser()`: Analiza las cookies en las solicitudes entrantes.

# Punto de Entrada de la Aplicación

Este archivo es el punto de entrada de tu aplicación. En él, se crea una instancia del servidor y se inicia. El servidor es el componente principal de tu aplicación web que escucha las solicitudes HTTP y las dirige a las rutas y controladores correspondientes.

## Creación e Inicio del Servidor

- **Clase del Servidor:** `Server` (Importada desde el archivo `server.js`).
- **Creación de la Instancia del Servidor:** Se crea una nueva instancia de la clase del servidor.
- **Inicio del Servidor:** Se inicia el servidor llamando al método `startServer()` en la instancia del servidor.

## Uso

Este archivo es el punto de entrada desde el cual se inicia tu servidor y, por lo tanto, tu aplicación web. Asegúrate de que la clase del servidor (`Server`) esté configurada adecuadamente con las rutas, middleware y controladores necesarios antes de iniciar el servidor.


# Archivo de Rutas

Este archivo de rutas define y organiza las rutas de tu aplicación Express. Proporciona una estructura clara para la navegación y la gestión de diferentes partes de tu aplicación. Las rutas se dividen en tres secciones principales: Indicadores, Informes y Usuarios.

## Rutas de Indicadores

- **Ruta Base:** `/Indicators`
- **Middleware de Autenticación:** `authRequired`
- **Descripción:** Este grupo de rutas está protegido por autenticación y se utiliza para acceder a las operaciones relacionadas con los indicadores. Requiere que los usuarios estén autenticados para acceder a estas rutas.

## Rutas de Informes

- **Ruta Base:** `/Reports`
- **Middleware de Autenticación:** Ninguno
- **Descripción:** Este grupo de rutas se utiliza para acceder a las operaciones relacionadas con los informes. No requiere autenticación para acceder a estas rutas.

## Rutas de Usuarios

- **Ruta Base:** `/Users`
- **Middleware de Autenticación:** Ninguno
- **Descripción:** Este grupo de rutas se utiliza para acceder a las operaciones relacionadas con los usuarios. No requiere autenticación para acceder a estas rutas.

## Uso

Este archivo de rutas se utiliza en conjunto con controladores y middleware

# Middleware de Autenticación

Este middleware, denominado `authRequired`, se utiliza para proteger rutas en tu aplicación, asegurándose de que los usuarios estén autenticados antes de acceder a esas rutas. Verifica la existencia de un token de autenticación en las cookies y, si se encuentra y es válido, permite el acceso a la ruta protegida.

## Función del Middleware

- **Nombre del Middleware:** `authRequired`
- **Descripción:** Este middleware verifica la existencia de un token de autenticación en las cookies de la solicitud. Si no se encuentra un token válido, devuelve una respuesta de error con un código de estado 401, indicando que la autorización se ha denegado. Si el token es válido, permite el acceso a la ruta protegida y pasa al siguiente middleware o controlador.

## Uso

Este middleware se aplica a rutas que requieren autenticación para acceder. Puedes utilizarlo en rutas donde desees proteger recursos o datos sensibles. Asegúrate de que las rutas estén configuradas correctamente para utilizar este middleware en tu aplicación.

```javascript
// Ejemplo de uso del middleware en una ruta
import { authRequired } from './middleware.js';

app.get('/ruta-protegida', authRequired, (req, res) => {
  // El usuario tiene acceso a esta ruta solo si está autenticado
  // ...
});
```


# Ayudantes de la Aplicación

Los helpers son funciones auxiliares que se utilizan en tu aplicación para realizar tareas específicas, como encriptar contraseñas, comparar contraseñas, enviar respuestas HTTP o manejar tokens JWT. A continuación, se describen los diferentes helpers disponibles en tu aplicación.

## Encriptación de Contraseña

### `encryptPassword(password)`

- **Descripción:** Esta función toma una contraseña en texto claro y la encripta utilizando el algoritmo bcrypt con un factor de coste de 10. Devuelve la contraseña encriptada.

### `comparePasswords(plainPassword, hashedPassword)`

- **Descripción:** Esta función compara una contraseña en texto claro con una contraseña encriptada previamente. Devuelve `true` si coinciden y `false` en caso contrario.

## Respuestas HTTP

### `sendSuccessResponse(res, data, statusCode = 200)`

- **Descripción:** Esta función se utiliza para enviar respuestas exitosas al cliente. Permite devolver datos y establecer un código de estado HTTP personalizado. Si los datos indican un error con un estado 404, redirige a `sendErrorResponse`.

### `sendErrorResponse(res, err, statusCode = 500)`

- **Descripción:** Esta función se utiliza para enviar respuestas de error al cliente. Permite devolver mensajes de error y establecer un código de estado HTTP personalizado.

## Tokens JWT

### `createToken(id)`

- **Descripción:** Esta función crea un token JSON Web Token (JWT) firmado con una clave privada. El token incluye el ID proporcionado y tiene una fecha de emisión y vencimiento.

### `verifyJWT(token)`

- **Descripción:** Esta función verifica y decodifica un token JWT utilizando la clave privada. Devuelve el contenido del token (payload) si la verificación es exitosa.

## Uso

Estos helpers se utilizan en diferentes partes de tu aplicación para realizar tareas relacionadas con la autenticación, el manejo de contraseñas y el envío de respuestas HTTP. Asegúrate de que estos helpers estén correctamente configurados y llamados en las partes relevantes de tu código.


# Controladores

Estos controladores manejan las operaciones relacionadas con los indicadores, usuarios y reportes

## Métodos de los controladores

### Obtener Todos los indicadores, usuarios y reportes

- **Ruta:** `/Indicators`,`/Users`,`/Reports`
- **Método HTTP:** GET
- **Descripción:** Este endpoint obtiene todos los indicadores disponibles.

### Crear un Nuevo Indicador, usuario o reporte

- **Ruta:** `/Indicators`,`/Users`,`/Reports`
- **Método HTTP:** POST
- **Descripción:** Este endpoint permite crear un nuevo indicador.usuario o reporte. Los datos del indicador, como nombre, descripción, fechas, fórmula, frecuencia, cumplimiento y área, se proporcionan en el cuerpo de la solicitud.

### Actualizar un Indicador, usuario o reporte existente

- **Ruta:** `/Indicators/:Id`, `/Users/:Id`, `/Reports/:Id`
- **Método HTTP:** PUT
- **Descripción:** Este endpoint permite actualizar un indicador existente identificado por su `Id`. Los datos del indicador se proporcionan en el cuerpo de la solicitud.

### Eliminar un Indicador, usuario o reporte

- **Ruta:** `/Indicators/:Id`, `/Users/:Id`, `/Reports/:Id`
- **Método HTTP:** DELETE
- **Descripción:** Este endpoint permite eliminar un indicador existente identificado por su `Id`.

## Estructura de Datos

El controlador utiliza funciones auxiliares para extraer los datos del cuerpo de la solicitud y el parámetro `Id` en las rutas.

## Respuestas

El controlador utiliza las funciones `sendSuccessResponse` y `sendErrorResponse` del módulo `SendResponse.js` para enviar respuestas adecuadas en caso de éxito o error.

### Uso

Este controlador es parte de una aplicación más grande que gestiona indicadores. Puedes usar estos endpoints para interactuar con los indicadores de la aplicación.

## Contribución

Si deseas contribuir a este controlador o mejorar su funcionalidad, puedes seguir estos pasos:

1. Haz un fork del repositorio.
2. Realiza tus cambios en una nueva rama.
3. Asegúrate de que las pruebas pasen y de que tu código esté bien documentado.
4. Envía una solicitud de extracción (pull request) con una descripción de tus cambios.





## Licencia

Este controlador se encuentra bajo la [Licencia MIT](LICENSE.md). Puedes consultar el archivo [LICENSE.md](LICENSE.md) para obtener más detalles.

## Contacto

Si deseas ponerte en contacto o tienes preguntas relacionadas con este controlador, puedes encontrarme en [tu dirección de correo] o [tu perfil de GitHub](https://github.com/tu-usuario).

---

Este README proporciona una descripción general de cómo funciona el controlador de indicadores y cómo se pueden usar sus rutas. Asegúrate de personalizarlo con la información específica de tu proyecto y sus rutas.

