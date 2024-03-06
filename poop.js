const fs = require('fs');

// Leer el archivo de texto del chat de WhatsApp
fs.readFile('chat.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Dividir el chat en líneas
    const lines = data.split('\n');

    // Objeto para almacenar los conteos de emojis 💩 por usuario
    const emojiCounts = {};

    // Expresiones regulares para identificar mensajes y emojis
    const messageRegex = /^(\d{2}-\d{2}-\d{2} \d{2}:\d{2}) - (.*?): (.*)$/;
    // Emojis de 💩 y archivos adjuntos/stickers que equivalen a 💩
    const emojiRegex = /💩|STK-20240215-WA0005\.webp/g;
    // Mensajes con multiplicadores como "💩x10" o "💩 x10"
    const emojiMultiplierRegex = /💩\s*x(\d+)/;

    // Procesar cada línea del chat
    lines.forEach(line => {
        const match = line.match(messageRegex);
        if (match) {
            const [, , user, message] = match;
            let count = 0;
            let emojiMatch;

            // Verificar si hay multiplicadores como "💩x10"
            const multiplierMatch = message.match(emojiMultiplierRegex);
            if (multiplierMatch) {
                count += parseInt(multiplierMatch[1], 10);
            }

            // Contar emojis y archivos adjuntos que equivalen a 💩
            while ((emojiMatch = emojiRegex.exec(message)) !== null) {
                count += 1;
            }

            emojiCounts[user] = (emojiCounts[user] || 0) + count;
        }
    });

    // Imprimir el resultado
    console.log(emojiCounts);
});
