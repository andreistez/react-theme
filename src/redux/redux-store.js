import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer'
import headerReducer from './header-reducer'
import footerReducer from './footer-reducer'
import optionsReducer from './options-reducer'
import pagesReducer from './pages-reducer'
import fastOrderReducer from './fast-order-reducer'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers( {
	app			: appReducer,
	header		: headerReducer,
	footer		: footerReducer,
	options		: optionsReducer,
	pages		: pagesReducer,
	fastOrder	: fastOrderReducer,
	form		: formReducer
} )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers, composeEnhancers( applyMiddleware( thunkMiddleware ) ) )
export default store