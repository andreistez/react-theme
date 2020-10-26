import { footerAPI } from '../api/api'

// Authorization constants.
const GET_FOOTER_LOGO = 'footer/GET-FOOTER-LOGO'
const GET_FOOTER_MENU = 'footer/GET-FOOTER-MENU'
const GET_FOOTER_PHONE = 'footer/GET-FOOTER-PHONE'
const GET_FOOTER_BUTTON_TEXT = 'footer/GET-FOOTER-BUTTON-TEXT'
const GET_FOOTER_COPYRIGHTS = 'footer/GET-FOOTER-COPYRIGHTS'
const GET_FOOTER_ERROR = 'footer/GET-FOOTER-ERROR'

let initialState = {
	logo		: null,
	menu		: [],
	phone		: null,
	buttonText	: '',
	copyrights	: '',
	error		: null
}

const footerReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_FOOTER_LOGO:
			return {
				...state,
				logo: action.logo
			}

		case GET_FOOTER_MENU:
			return {
				...state,
				menu: [...action.menu]
			}

		case GET_FOOTER_PHONE:
			return {
				...state,
				phone: action.phone
			}

		case GET_FOOTER_BUTTON_TEXT:
			return {
				...state,
				buttonText: action.text
			}

		case GET_FOOTER_COPYRIGHTS:
			return {
				...state,
				copyrights: action.copyrights
			}

		case GET_FOOTER_ERROR:
			return {
				...state,
				error: action.errorText
			}

		default:
			return state
	}
}
export default footerReducer

const getFooterMenu = ( menu ) => ( { type: GET_FOOTER_MENU, menu } )
const getFooterLogo = ( logo ) => ( { type: GET_FOOTER_LOGO, logo } )
const getFooterPhone = ( phone ) => ( { type: GET_FOOTER_PHONE, phone } )
const getFooterButtonText = ( text ) => ( { type: GET_FOOTER_BUTTON_TEXT, text } )
const getFooterCopyrights = ( copyrights ) => ( { type: GET_FOOTER_COPYRIGHTS, copyrights } )
const getFooterError = ( errorText ) => ( { type: GET_FOOTER_ERROR, errorText } )

export const getFooterLogotype = ( logoOptionName ) => async ( dispatch ) => {
	let response = await footerAPI.getLogo( logoOptionName )
    
    if ( response && response.status === 200 ) {
        dispatch( getFooterLogo( response.data.url ) )
    }	else {
    	dispatch( getFooterError( response.status.text ) )
    }
}

export const getFooterMenuStructure = ( menuName ) => async ( dispatch ) => {
	let response = await footerAPI.getMenuByName( menuName )
    
    if ( response && response.status === 200 ) {
        dispatch( getFooterMenu( response.data ) )
    }	else {
    	dispatch( getFooterError( response.status.text ) )
    }
}

export const getFooterPhoneFromREST = ( phoneOptionName ) => async ( dispatch ) => {
	let response = await footerAPI.getPhone( phoneOptionName )
    
    if ( response && response.status === 200 ) {
        dispatch( getFooterPhone( response.data ) )
    }	else {
    	dispatch( getFooterError( response.status.text ) )
    }
}

export const getFooterButtonTextFromREST = ( buttonTextOptionName ) => async ( dispatch ) => {
	let response = await footerAPI.getButtonText( buttonTextOptionName )
    
    if ( response && response.status === 200 ) {
        dispatch( getFooterButtonText( response.data ) )
    }	else {
    	dispatch( getFooterError( response.status.text ) )
    }
}

export const getFooterCopyrightsFromREST = ( copyrightsOptionName ) => async ( dispatch ) => {
	let response = await footerAPI.getFooterCopyrights( copyrightsOptionName )
    
    if ( response && response.status === 200 ) {
        dispatch( getFooterCopyrights( response.data ) )
    }	else {
    	dispatch( getFooterError( response.status.text ) )
    }
}