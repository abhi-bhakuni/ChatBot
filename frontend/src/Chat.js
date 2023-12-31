import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chat = ({ inputValue }) => {
    const [openAIData, setOpenAIData] = useState('');

    useEffect(() => {
        let timeOut;

        const fetchOpenAIData = async (inputValue) => {
            try {
                const response = await axios.get('http://localhost:3001/api/openai-data', {
                    params: {
                        'inputValue': inputValue,
                    }
                });
                setOpenAIData(response.data.data);
            } catch (error) {
                console.error('Error fetching OpenAI data:', error);
            }
        };

        const delayFetch = (inputValue) => {
            clearTimeout(timeOut);
            timeOut = setTimeout(() => fetchOpenAIData(inputValue), 500);
        };

        if (inputValue){
            delayFetch(inputValue);
        }

        return () => clearTimeout(timeOut);
    }, [inputValue]);

    return (
        <>
            <div className='questionArea' id='questionArea'>
                <i className='fa-solid fa-user'></i>
                <p>{inputValue}</p>
            </div>
            <div className='answerArea' id='answerArea'>
                <i className='fa-brands fa-slack'></i>
                <p>{openAIData}</p>
            </div>
        </>
    );
};

export default Chat;
