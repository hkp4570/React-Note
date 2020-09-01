import React from 'react';
import counterModel from './models/counter';
import routerConfig from './routerConfig';
import dva from 'dva';
import {createBrowserHistory} from 'history';

const app = dva({
  history: createBrowserHistory()
});

app.model(counterModel);

app.router(routerConfig);

app.start('#root');

