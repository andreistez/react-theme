import { fastOrderAPI } from '../api/api'
import { reset } from 'redux-form'

// Fast order constants.
const SHOW_FORM					= 'fast-order/SHOW-FORM'
const HIDE_FORM					= 'fast-order/HIDE-FORM'
const MAKE_FAST_ORDER_SUCCESS	= 'fast-order/MAKE-FAST-ORDER-SUCCESS'
const MAKE_FAST_ORDER_ERROR 	= 'fast-order/MAKE-FAST-ORDER-ERROR'
const HIDE_RESPONSE_MESSAGE		= 'fast-order/HIDE-RESPONSE-MESSAGE'

let initialState = {
	isVisible					: false,
	responseMessage				: '',
	responseMessageVisibility	: false
}

const fastOrderReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case SHOW_FORM:
			return {
				...state,
				isVisible: true
			}

		case HIDE_FORM:
			return {
				...state,
				isVisible: false
			}

		case MAKE_FAST_ORDER_SUCCESS:
			return {
				...state,
				responseMessage: action.message,
				responseMessageVisibility: true
			}

		case MAKE_FAST_ORDER_ERROR:
			return {
				...state,
				responseMessage: action.message,
				responseMessageVisibility: true
			}

		case HIDE_RESPONSE_MESSAGE:
			return {
				...state,
				responseMessageVisibility: false
			}

		default:
			return state
	}
}
export default fastOrderReducer

export const showForm = () => ( { type: SHOW_FORM } )
export const hideForm = () => ( { type: HIDE_FORM } )
const makeFastOrderSuccess = ( message ) => ( { type: MAKE_FAST_ORDER_SUCCESS, message } )
const makeFastOrderError = ( message ) => ( { type: MAKE_FAST_ORDER_ERROR, message } )
export const hideResponseMessage = () => ( { type: HIDE_RESPONSE_MESSAGE } )

export const makeFastOrder = ( fullname, phone ) => async ( dispatch ) => {
	let response = await fastOrderAPI.makeFastOrder( fullname, phone )
    
    if ( response && response.status === 200 ) {
    	if ( response.data.success ) {
    		dispatch( makeFastOrderSuccess( response.data.data.message ) )
	        dispatch( reset( 'fast-order-form' ) )
    	}	else {
    		dispatch( makeFastOrderError( response.data.data.message ) )
    	}
    }	else {
    	dispatch( makeFastOrderError( response.data.data.message ) )
    }
}