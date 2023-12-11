import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ApprovalDetail from './communicationDetails';
import CommunicationDetails from './communicationDetails';
import dummychatdata from './dumyChatData';

const usercommunication = () => {
  return (
      <CardContent style={{width: "100%", height: "100%", marginTop: "-12px", borderRadius: "10px"}}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
         <CommunicationDetails messages={dummychatdata} ></CommunicationDetails>
        </div>
      </CardContent>
  );
};

export default usercommunication;
