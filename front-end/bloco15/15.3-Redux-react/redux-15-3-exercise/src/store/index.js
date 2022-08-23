import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import clientReducer from './reducers/clientsReducer';

const rootReducer = combineReducers({ loginReducer, clientReducer })

const store = createStore(rootReducer, composeWithDevTools())

export default store;