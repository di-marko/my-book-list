import { createStore , applyMiddleware , combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allBooksReducer } from './reducers/booksReducers';

const reducers = combineReducers({
    books : allBooksReducer
});

const initialState = {}

const store = createStore(reducers , initialState , composeWithDevTools(applyMiddleware(thunk)));

export default store;