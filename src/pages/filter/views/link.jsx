import React from 'react';
import {connect} from "react-redux";
import {setFilter} from "../actions";

function Link({ active, children, filter, onFilter }) {
  const handleClick = e => {
    e.preventDefault();
    onFilter(filter);
  }
  if(filter === active){
    return <strong>{children}</strong>
  }else{
    return <a href="#" onClick={handleClick}>{children}</a>
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFilter: f => dispatch(setFilter(f))
  }
}
const mapStateToProps = state => {
  return {
    active: state.filter,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Link);