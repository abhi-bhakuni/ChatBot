import React, { useState } from 'react';
import './App.css';
import Chat from './Chat';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [chats, setChats] = useState([]);

  const handleNewChat = () => {
    setChats([]);
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setChats([...chats, inputValue.trim()]);
      setInputValue('');
    }
  };

  const press = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div className="chatbot">
      <div className="searchhistory">
        <button className="newchat" onClick={handleNewChat}>
          <i className="fa-brands fa-react"></i>
          <span>New Chat</span>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
      <div className="container">
        <div className="chatarea" id="chatarea">
          {chats.map((chat, index) => (
            <Chat inputValue={chat} key={index} />
          ))}
        </div>
        <div className="search">
          <form className="searchform" onSubmit={handleSubmit}>
            <div className="inputform">
              <textarea
                name="inputdata"
                id="inputdata"
                className="inputdata"
                placeholder="Send a message..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyUp={press}
              ></textarea>
            </div>
            <button className="submitform" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
