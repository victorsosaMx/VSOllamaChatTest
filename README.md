# VSOllamaTest

Este es un proyecto de ejemplo que permite chatear con un modelo de Ollama usando HTML y JavaScript. El proyecto incluye una interfaz simple donde los usuarios pueden escribir mensajes y recibir respuestas del modelo en tiempo real.

## Requisitos

- Un servidor API de Ollama corriendo en `http://localhost:11434`
- Navegador web compatible con JavaScript

## Archivos

- `VSOllamaTest.html`: Contiene el código HTML, CSS y JavaScript para la interfaz de chat.

## Instalación

1. Clona este repositorio en tu máquina local    

2. Asegúrate de que el servidor API de Ollama esté corriendo en `http://localhost:11434`.

2.1 Para evitar problema con CORS, ejecuta el html desde un servidor "localhost"

## Uso

1. Abre el archivo `VSOllamaTest.html` en tu navegador web.

2. Escribe tu mensaje en el campo de texto y haz clic en el botón "Enviar".

3. El mensaje será enviado al modelo de Ollama y la respuesta se mostrará en el chat.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Ollama (https://ollama.com/)


## Documentación del Código
Sección <head>
Metadatos: Incluye el charset y la configuración de viewport para asegurar que la página sea responsive.
Título: Define el título de la página.
Estilos CSS: Define los estilos básicos para el cuerpo, el chat box, el input de texto, y el botón de enviar, incluyendo estilos adicionales para mejorar la apariencia del botón y agregar un efecto hover.

Sección <body>
Estructura HTML: Utiliza una estructura de Bootstrap para un diseño responsivo. Incluye un contenedor, una fila, y una columna.
Elementos del Chat: Incluye un div para mostrar los mensajes (#chat-box), un input de texto para ingresar los mensajes (#chat-input), y un botón para enviar mensajes (#send-button).

Script JavaScript
Event Listener: Agrega un evento click al botón de enviar para llamar a la función sendMessage.

Función sendMessage:
Captura el Input: Obtiene el valor del input de texto y lo agrega al chat box.
Indicador de Carga: Muestra un mensaje "Cargando respuesta..." mientras se espera la respuesta del servidor.
Fetch con Timeout: Implementa una función fetchWithTimeout que envuelve la solicitud fetch en un Promise.race para agregar un timeout.
Solicitud a la API: Realiza la solicitud a la API usando fetch con el método POST, incluyendo el modelo y el prompt como JSON.
Manejo de Respuesta: Procesa la respuesta de la API y la muestra en el chat box. Si la solicitud es exitosa, se actualiza el chat box con la respuesta del modelo. Si ocurre un error, se muestra un mensaje de error en el chat box.


## Créditos

Este proyecto fue desarrollado como una práctica de HTML, CSS y JavaScript.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
