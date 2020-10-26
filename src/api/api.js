import * as axios from 'axios'

// Basic URL for AJAX requests.
const basic = axios.create( {
	baseURL: 'http://wordpress-react.test/wp-json/'
} )
const home = axios.create( {
	baseURL: 'http://wordpress-react.test/'
} )

// Customizer methods.
export const customizerAPI = {
	getCustomizerOptionByID( optionID ) {
		return basic.get( `cwp-routes/customizer-options/${optionID}` )
	}
}

// Pages methods.
export const pagesAPI = {
	getPageBySlug( pageSlug = 'home-page' ) {
		return basic.get( `cwp-routes/pages/${pageSlug}` )
	}
}

// Header methods.
export const headerAPI = {
	getLogo( logoOptionName ) {
		return basic.get( `cwp-routes/customizer-options/${logoOptionName}` )
	},

	getMenuByName( menuName = 'menu-1' ) {
		return basic.get( `cwp-routes/menu/${menuName}` )
	},

	getPhone( phoneOptionName ) {
		return basic.get( `cwp-routes/customizer-options/${phoneOptionName}` )
	},

	getButtonText( buttonTextOptionName ) {
		return basic.get( `cwp-routes/customizer-options/${buttonTextOptionName}` )
	}
}

// Footer methods.
export const footerAPI = {
	getLogo( logoOptionName ) {
		return basic.get( `cwp-routes/customizer-options/${logoOptionName}` )
	},

	getMenuByName( menuName = 'menu-footer' ) {
		return basic.get( `cwp-routes/menu/${menuName}` )
	},

	getPhone( phoneOptionName ) {
		return basic.get( `cwp-routes/customizer-options/${phoneOptionName}` )
	},

	getButtonText( buttonTextOptionName ) {
		return basic.get( `cwp-routes/customizer-options/${buttonTextOptionName}` )
	},

	getFooterCopyrights( copyrightsOptionName ) {
		return basic.get( `cwp-routes/customizer-options/${copyrightsOptionName}` )
	}
}

// Fast order methods.
export const fastOrderAPI = {
	makeFastOrder( fullname, phone ) {
		const data = {
			fullname: fullname,
			phone: phone
		}
		const str = JSON.stringify( data );
		return home.post( 'wp-admin/admin-ajax.php?action=_make_fast_order', str )
	}
}