// == Import npm
import React from 'react';

// == Import
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';

import './chatroom.scss';

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Settings/>
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chatroom;
