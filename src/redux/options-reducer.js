import { customizerAPI } from '../api/api'

// Authorization constants.
const GET_OPTION = 'pages/GET-OPTION'

let initialState = {
	option: null
}

const pagesReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_OPTION:
			return {
				...state,
				option: action.option
			}

		default:
			return state
	}
}
export default pagesReducer

const getCustomizerOptionByID = ( option ) => ( { type: GET_OPTION, option } )

export const getCustomizerOption = ( optionID ) => async ( dispatch ) => {
	let response = await customizerAPI.getCustomizerOptionByID( optionID )
    
    if ( response ) {
        dispatch( getCustomizerOptionByID( response.data ) )
    }
}