import { menuAPI } from '../api/api'

// Authorization constants.
const GET_MENU = 'menu/GET-MENU'
const GET_MENU_ERROR = 'menu/GET-MENU-ERROR'

let initialState = {
	menu	: [],
	error	: null
}

const menusReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_MENU:
			return {
				...state,
				menu: [...action.menu]
			}

		case GET_MENU_ERROR:
			return {
				...state,
				error: action.errorText
			}

		default:
			return state
	}
}
export default menusReducer

const getMenu = ( menu ) => ( { type: GET_MENU, menu } )
const getMenuError = ( errorText ) => ( { type: GET_MENU_ERROR, errorText } )

export const getMenuStructure = ( menuName ) => async ( dispatch ) => {
	let response = await menuAPI.getMenuByName( menuName )
    
    if ( response && response.status === 200 ) {
        dispatch( getMenu( response.data ) )
    }	else {
    	dispatch( getMenuError( response.status.text ) )
    }
}