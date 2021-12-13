import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';
import {CloudinaryContext} from 'cloudinary-react';
import {UserProvider} from "./contexts/UserContext";

ReactDOM.render(

  <UserProvider>
    <CloudinaryContext cloudName={"controles-pediatricos-api"} secure={true}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CloudinaryContext>
  </UserProvider>,
  document.getElementById('root')
);

reportWebVitals();
