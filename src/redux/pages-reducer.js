import { pagesAPI } from '../api/api'

// Authorization constants.
const GET_PAGE = 'pages/GET-PAGE'

let initialState = {
	pageContent: null
}

const pagesReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_PAGE:
			return {
				...state,
				pageContent: action.content
			}

		default:
			return state
	}
}
export default pagesReducer

const getPageContent = ( content ) => ( { type: GET_PAGE, content } )

export const getPageContentBySlug = ( pageSlug ) => async ( dispatch ) => {
	let response = await pagesAPI.getPageBySlug( pageSlug )
    
    if ( response && response.status === 200 ) {
        dispatch( getPageContent( response.data.content.post_content ) )
    }
}