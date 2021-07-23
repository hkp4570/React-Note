import React, {useState} from 'react';
import {connect} from 'react-redux';

import {addTodo, removeTodo, toggleTodo} from '../actions.js';
import {FilterTypes} from "../../constants";

function Index(props){
  const [value, setValue] = useState('');
  const changeValue = e => {
    setValue(e.target.value);
  }
  const submit = e => {
    e.preventDefault();
    if(value === '') return ;
    props.onAdd(value);
    setValue('');
  }
  const handleRemove = item => {
    props.onRemove(item.id);
  }
  const handleToggle = item => {
    props.onToggle(item.id);
  }
  return (
    <form onSubmit={submit}>
      <input type="text" value={value} onChange={changeValue}/>
      <button type={'submit'}>添加</button>
      <ul>
        {
          props.todoData.map(item => (
            <li key={item.id}>
              <input type="checkbox" checked={item.complete ? 'checked' : ''} onClick={() => handleToggle(item)}  />
              <span>{item.text}</span>
              <span onClick={() => handleRemove(item)}>删除</span>
            </li>
          ))
        }
      </ul>
    </form>
  )
}

const filterData = (data, f) => {
  switch (f){
    case FilterTypes.ALL:
      return data;
    case FilterTypes.COMPLETED:
      return data.filter(e => e.complete)
    case FilterTypes.UNCOMPLETED:
      return data.filter(e => !e.complete)
    default:
      return data
  }
}

const mapStateToProps = state => {
  return {
    todoData: filterData(state.todos, state.filter),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    },
    onRemove: id => {
      dispatch(removeTodo(id))
    },
    onToggle: id => {
      dispatch(toggleTodo(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);