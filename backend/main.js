const express = require('express');
const cors = require('cors');
const app = express();
const { fetchOpenAIData } = require('./openai');

app.use(cors());

app.get('/api/openai-data', async (req, res) => {
    try {
        const inputValue = req.query.inputValue;
        const data = await fetchOpenAIData(inputValue);
        res.json({ data });
    } catch (error) {
        console.error('Error while processing API request:', error);
        res.status(500).json({ error: 'Error fetching OpenAI data' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
