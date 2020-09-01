import React from 'react';
import counterModel from './models/counter';
import routerConfig from './routerConfig';
import dva from 'dva';
import {createBrowserHistory} from 'history';
import myDvaPlugin from './myDvaPlugin';
import createLoading from 'dva-loading'


//得到一个dva对象
const app = dva({
  history: createBrowserHistory(),
  initialState: {
    counter: 123
  },
})

app.use(myDvaPlugin);
app.use(createLoading());

app.model(counterModel);

app.router(routerConfig);

app.start('#root');

