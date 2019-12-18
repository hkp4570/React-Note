import React from 'react';

export default function withLogin(Comp) {
  return function loginWrapper(props) {
    if(props.isLogin){
      return <Comp {...props} />
    }else{
      return null;
    }
  }
}
