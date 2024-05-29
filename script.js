document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const input = document.getElementById('chat-input').value;
    if (input.trim() === '') return;

    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p><strong>Tú:</strong> ${input}</p>`;
    document.getElementById('chat-input').value = '';

    // Mostrar indicador de carga
    chatBox.innerHTML += `<p id="loading">Cargando respuesta...</p>`;

    // Implementar fetch con timeout
    const fetchWithTimeout = (url, options, timeout = 70000) => {
        return Promise.race([
            fetch(url, options),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Request timeout')), timeout)
            )
        ]);
    };

    fetchWithTimeout('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gemma:latest',
            prompt: input,
            stream: false
        })
    }, 7000)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let responseText = '';
        const interval = setInterval(() => {
            if (data.done) {
                clearInterval(interval);
                document.getElementById('loading').remove();
            }
            responseText += data.response;
            chatBox.innerHTML += `<p><strong>Modelo:</strong> ${responseText}</p>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 100);
    })
    .catch(error => {
        console.error('Error:', error);
        chatBox.innerHTML += `<p style="color: red;"><strong>Error:</strong> ${error.message}</p>`;
        document.getElementById('loading').remove();
    });
}
