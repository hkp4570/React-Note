import React from 'react';
import counterModel from './models/counter'
import App from './App';
import dva from 'dva';

const app = dva();

app.model(counterModel);

app.router(() => <App />);

app.start('#root');

