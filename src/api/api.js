import * as axios from 'axios'

const api = axios.create( {
	baseURL: 'http://wordpress-react.test/wp-json/wp/v2/'
} )

const cwpRoute = axios.create( {
	baseURL: 'http://wordpress-react.test/wp-json/cwp-routes/'
} )

const customizerRoute = axios.create( {
	baseURL: 'http://wordpress-react.test/wp-json/cwp-routes/customizer-options/'
} )

export const pagesAPI = {
	getPageByID( pageID = 2 ) {
		return api.get( `pages/${pageID}` )
	}
}

export const headerAPI = {
	getLogo( logoOptionName ) {
		return customizerRoute.get( `${logoOptionName}` )
	},

	getMenuByName( menuName = 'menu-1' ) {
		return cwpRoute.get( `${menuName}` )
	},

	getPhone( phoneOptionName ) {
		return customizerRoute.get( `${phoneOptionName}` )
	},

	getButtonText( buttonTextOptionName ) {
		return customizerRoute.get( `${buttonTextOptionName}` )
	}
}

export const customizerAPI = {
	getCustomizerOptionByID( optionID ) {
		return cwpRoute.get( `/customizer-options/${optionID}` )
	}
}