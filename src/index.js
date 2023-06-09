// eslint-disable-next-line
import React from "react"
// import ReactDOM from 'react-dom';
import App from './04-test/test.js'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
