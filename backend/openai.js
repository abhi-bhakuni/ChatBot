const axios = require('axios');

const fetchOpenAIData = async (inputValue) => {
    const apiKey = 'OPENAI_API_KEY';
    const prompt = inputValue;
    let data = {
        'model': 'text-davinci-003',
        'prompt': prompt,
        'max_tokens': 20
    }

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            });

        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error fetching data from OpenAI API:');
        console.log(error.response.data.error);
    }
};

module.exports = { fetchOpenAIData };
