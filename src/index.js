import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ChatEngineWrapper } from 'react-chat-engine'

ReactDOM.render(
  <React.StrictMode>
    <ChatEngineWrapper>
      <App />
    </ChatEngineWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

