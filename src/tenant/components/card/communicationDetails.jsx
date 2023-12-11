import { useTheme } from '@mui/material';
import React, { useState } from 'react';

const CommunicationDetails = ({ messages }) => {
  const theme = useTheme();
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Implement your message sending logic if needed
  };

  return (
    <div style={{ width: '100%', padding: '10px', borderRadius: "10px",  backgroundColor: theme.palette.primary.backgroundColor}}>
      <div style={{ height: '200px', overflowY: 'scroll' }}>
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} style={{ marginBottom: '10px', textAlign: message.sender === 'user' ? 'right' : 'left' }}>
              {message.text}
            </div>
          ))
        ) : (
          <div style={{color: theme.palette.buttons.main}}>No messages available.</div>
        )}
      </div>
      <div style={{ marginTop: '10px', display: 'flex' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ flex: 1, marginRight: '10px' }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default CommunicationDetails;
