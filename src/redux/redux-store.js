import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer'
import headerReducer from './header-reducer'
import optionsReducer from './options-reducer'

let reducers = combineReducers( {
	app		: appReducer,
	header	: headerReducer,
	options	: optionsReducer
} )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers, composeEnhancers( applyMiddleware( thunkMiddleware ) ) )
export default store