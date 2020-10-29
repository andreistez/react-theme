import { headerAPI } from '../api/api'

// Authorization constants.
const GET_LOGO = 'header/GET-LOGO'
const GET_MENU = 'header/GET-MENU'
const GET_PHONE = 'header/GET-PHONE'
const GET_BUTTON_TEXT = 'header/GET-BUTTON-TEXT'
const GET_ERROR = 'header/GET-ERROR'
const OPEN_MOBILE_MENU = 'header/OPEN-MOBILE-MENU'
const CLOSE_MOBILE_MENU = 'header/CLOSE-MOBILE-MENU'

let initialState = {
	logo				: null,
	menu				: [],
	phone				: null,
	buttonText			: '',
	error				: null,
	isMobileMenuOpen	: false
}

const headerReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_LOGO:
			return {
				...state,
				logo: action.logo
			}

		case GET_MENU:
			return {
				...state,
				menu: [...action.menu]
			}

		case GET_PHONE:
			return {
				...state,
				phone: action.phone
			}

		case GET_BUTTON_TEXT:
			return {
				...state,
				buttonText: action.text
			}

		case GET_ERROR:
			return {
				...state,
				error: action.errorText
			}

		case OPEN_MOBILE_MENU:
			return {
				...state,
				isMobileMenuOpen: true
			}

		case CLOSE_MOBILE_MENU:
			return {
				...state,
				isMobileMenuOpen: false
			}

		default:
			return state
	}
}
export default headerReducer

const getMenu = ( menu ) => ( { type: GET_MENU, menu } )
const getLogo = ( logo ) => ( { type: GET_LOGO, logo } )
const getPhone = ( phone ) => ( { type: GET_PHONE, phone } )
const getButtonText = ( text ) => ( { type: GET_BUTTON_TEXT, text } )
const getError = ( errorText ) => ( { type: GET_ERROR, errorText } )

// Is header mobile menu open or closed.
export const openMobileMenu = () => ( { type: OPEN_MOBILE_MENU } )
export const closeMobileMenu = () => ( { type: CLOSE_MOBILE_MENU } )

// Get site logo.
export const getLogotype = ( logoOptionName ) => async ( dispatch ) => {
	let response = await headerAPI.getLogo( logoOptionName )
    
    if ( response && response.status === 200 ) {
        dispatch( getLogo( response.data.url ) )
    }	else {
    	dispatch( getError( response.status.text ) )
    }
}

// Get header menu.
export const getMenuStructure = ( menuName ) => async ( dispatch ) => {
	let response = await headerAPI.getMenuByName( menuName )
    
    if ( response && response.status === 200 ) {
        dispatch( getMenu( response.data ) )
    }	else {
    	dispatch( getError( response.status.text ) )
    }
}

// Get phone number.
export const getPhoneFromREST = ( phoneOptionName ) => async ( dispatch ) => {
	let response = await headerAPI.getPhone( phoneOptionName )
    
    if ( response && response.status === 200 ) {
        dispatch( getPhone( response.data ) )
    }	else {
    	dispatch( getError( response.status.text ) )
    }
}

// Get header quick order button text.
export const getButtonTextFromREST = ( buttonTextOptionName ) => async ( dispatch ) => {
	let response = await headerAPI.getButtonText( buttonTextOptionName )
    
    if ( response && response.status === 200 ) {
        dispatch( getButtonText( response.data ) )
    }	else {
    	dispatch( getError( response.status.text ) )
    }
}