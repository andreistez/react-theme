import { authApi } from '../api/api'

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS'
const GET_API_TOKEN = 'app/GET-API-TOKEN'

let initialState = {
	initialized	: false
}

const appReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}

		default:
			return state
	}
}
export default appReducer

const initializedSuccess = () => ( { type: INITIALIZED_SUCCESS } )

export const initializeApp = () => ( dispatch ) => {
	dispatch( initializedSuccess() )
}