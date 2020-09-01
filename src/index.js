import React from 'react';
import counterModel from './models/counter';
import routerConfig from './routerConfig';
import dva from 'dva';
import {createBrowserHistory} from 'history';

// 一堆几乎不用的配置

// const logger = store => next => action => {
//     console.log("老状态：", store.getState());
//     next(action);
//     console.log("新状态：", store.getState());
//     console.log("")
// }

//得到一个dva对象
const app = dva({
  history: createBrowserHistory(),
  initialState: {
    counter: 123
  },
  // onError(err, dispatch) {
  //     console.log(err.message, dispatch);
  // }
  // onAction: logger
  // onStateChange(state) {
  //     console.log(state.counter);
  // },
  // onReducer(reducer) {
  //     return function (state, action) {
  //         console.log("reducer即将被执行")
  //         const newState = reducer(state, action);
  //         console.log("reducer执行结束")
  //         return newState;
  //     }
  // }
  // onEffect(oldEffect, sagaEffects, model, actionType) {
  //     return function* (action) {
  //         console.log("即将执行副作用代码")
  //         yield oldEffect(action);
  //         console.log("副作用代码执行完毕")
  //     }
  // }
  extraReducers: {
    abc(state = 123, action) {
      return state;
    },
    bcd(state = 456, action) {
      return state;
    }
  },
  extraEnhancers: [function (createStore) {
    return function (...args) {
      console.log("即将创建仓库1")
      return createStore(...args);
    }
  }, function (createStore) {
    return function (...args) {
      console.log("即将创建仓库2")
      return createStore(...args);
    }
  }]
});

app.model(counterModel);

app.router(routerConfig);

app.start('#root');

