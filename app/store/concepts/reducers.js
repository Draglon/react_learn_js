import { combineReducers } from 'redux';

import { loginReducer } from './login/reducers';
import { profileReducer } from './profile/reducers';

import { dataReducer } from './data/reducers';

export default combineReducers({
  login: loginReducer,
  profile: profileReducer,
  data: dataReducer,
});
