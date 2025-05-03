const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/ask', async (req, res) => {
    const userMessage = req.body.message;

    // OpenAI API request
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `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`
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: userMessage,
            max_tokens: 150
        })
    });

    const data = await response.json();
    res.send(data.choices[0].text.trim());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
