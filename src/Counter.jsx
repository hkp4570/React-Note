import React,{useRef} from 'react';
import {connect} from 'dva';

function Counter (props) {
  const inp = useRef();
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <input type="number" ref={inp} />
        <button onClick={() => props.onAdd(inp.current.value)}>添加</button>
      </p>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    number: state.counter
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onIncrease:() => {
      dispatch({
        type:'counter/increase',
      })
    },
    onDecrease:() => {
      dispatch({
        type:'counter/decrease',
      })
    },
    onAsyncIncrease:() => {
      dispatch({
        type:'counter/asyncIncrease',
      })
    },
    onAsyncDecrease:() => {
      dispatch({
        type:'counter/asyncDecrease',
      })
    },
    onAdd:(n) => {
      dispatch({
        type:'counter/add',
        payload: +n,
      })
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
