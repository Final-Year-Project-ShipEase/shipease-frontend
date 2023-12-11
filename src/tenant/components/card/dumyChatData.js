import React from 'react';
import Chatbox from './communicationDetails';

const dummyData = [
  { text: 'Hello!', sender: 'user' },
  { text: 'Hi there!', sender: 'bot' },
  { text: 'How can I help you?', sender: 'bot' },
  // Add more dummy messages as needed
];

const ChatApp = () => {
  return (
    <div>
      <h1>Chat App</h1>
      <Chatbox messages={dummyData} />
    </div>
  );
};

export default ChatApp;
