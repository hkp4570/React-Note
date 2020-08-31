import React from 'react'
import store from '../../store';
import {createIncreaseAction,createDecreaseAction,createAsyncIncreaseAction,createAsyncDecreaseAction} from '../../store/action/count';

/**
 * 展示组件
 * @param props
 * @returns {*}
 * @constructor
 */
function Counter (props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
      </p>
    </div>
  )
}

function mapStateToProps (state) {
  console.log(state);
  return {
    number: state.count,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    onIncrease(){
      dispatch(createIncreaseAction());
    },
    onDecrease(){
      dispatch(createDecreaseAction());
    },
    onAsyncIncrease(){
      dispatch(createAsyncIncreaseAction());
    },
    onAsyncDecrease(){
      dispatch(createAsyncDecreaseAction());
    }
  }
}
/**
 * 容器组件
 */
export default class CounterContainer extends React.Component{
  constructor (props) {
    super(props);
    this.state = mapStateToProps(store.getState());
    store.subscribe(() => {
      this.setState(mapStateToProps(store.getState()))
    })
  }
  render () {
    const eventHandle = mapDispatchToProps(store.dispatch);
    return(
      <Counter {...this.state} {...eventHandle} />
    )
  }
}

