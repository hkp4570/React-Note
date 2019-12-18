import studentApi from '@/services/student';
import {message} from 'antd';
export default {
  namespace:'student',
  state:{
  },
  effects:{
    *getStudent({payload},{call,put}){
      const response = yield call(studentApi.getStudent,payload);
      if(response.status === 'success'){
        return response.data;
      }else{
        message.error(response.status);
      }
    }
  },
  reducers:{
    setState(state,{payload}){
      return{...state,...payload};
    }
  }
}
