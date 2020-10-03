import { pagesAPI } from '../api/api'

// Authorization constants.
const GET_PAGE_DATA = 'pages/GET-PAGE-DATA'

let initialState = {
	pageData: []
}

const pagesReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_PAGE_DATA:
			return {
				...state,
				...action.pageData
			}

		default:
			return state
	}
}
export default pagesReducer

const getPageData = ( pageData ) => ( { type: GET_PAGE_ID, pageData } )

export const getPageDataByID = ( pageID ) => async ( dispatch ) => {
	let response = await pagesAPI.getPageByID( pageID )
    
    if ( response ) {
        dispatch( getPageData( response.content.rendered ) )
    }
}