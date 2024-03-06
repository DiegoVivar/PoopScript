# WhatsApp Poop Emoji Counter

## Descripción

Este script cuenta la cantidad de emojis de caca (💩) enviados por cada usuario en un chat de grupo de WhatsApp.

## Requisitos previos

- Debes tener Node.js instalado en tu computadora. Si no lo tienes, puedes descargarlo desde [aquí](https://nodejs.org/).

## Instrucciones

1. **Preparar el archivo de chat:**

   - Exporta tu chat de grupo de WhatsApp como un archivo de texto.
   - Asegúrate de que el archivo se llame `chat.txt` y colócalo en la carpeta raíz de este proyecto.

2. **Ejecutar el script:**
   - Abre una terminal o línea de comandos y navega hasta la carpeta del proyecto.
   - Ejecuta el siguiente comando para iniciar el script:
     ```
     node poop.js
     ```
   - El script leerá el archivo `chat.txt` y mostrará un recuento de los emojis de caca enviados por cada usuario.

## Notas

- El script considera variaciones como "💩x2" para contar múltiples emojis en un solo mensaje.
- Los archivos multimedia con nombres específicos también se cuentan como emojis de caca.
