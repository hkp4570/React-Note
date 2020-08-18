import store from './store/index';
import {fetchUser} from './store/action/usersAction';


store.dispatch(fetchUser());

// getUser().then(res => {
//   if(res){
//     store.dispatch(usersActions.createSetUsersAction(res))
//   }
// });
