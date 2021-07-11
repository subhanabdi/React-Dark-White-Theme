import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
const Styles = createGlobalStyle`
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
      body {
        font-family: 'Poppins', sans-serif;
        line-height: 16px;
      }
`;

ReactDOM.render(
	<React.StrictMode>
		<Styles />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
