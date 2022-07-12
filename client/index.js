import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';
import './styles/styles.scss'
import './styles/ticketColumn.scss'
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);