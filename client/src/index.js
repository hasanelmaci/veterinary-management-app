import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserAuthState from "./context/userAuth/UserAuthState"

ReactDOM.render(
  <UserAuthState>
    
    <App />
  </UserAuthState>,
  document.getElementById('root')
);
