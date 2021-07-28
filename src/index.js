import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto:400,500,700', 'Megrim:400,500,700', 'Bungee Hairline:400', 'sans-serif']
  }
});

ReactDOM.render(<App />,document.getElementById('root'));