import store from './store/index';

import {fetchUser} from './store/action/usersAction';


store.dispatch(fetchUser());

