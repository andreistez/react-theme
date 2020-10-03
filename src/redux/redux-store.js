import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import menusReducer from './menus-reducer'
import pagesReducer from './pages-reducer'

let reducers = combineReducers( {
	menus	: menusReducer,
	pages	: pagesReducer
} )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers, composeEnhancers( applyMiddleware( thunkMiddleware ) ) )
export default store