import * as axios from 'axios'

const api = axios.create( {
	baseURL: 'http://wordpress-react.test/wp-json/wp/v2/'
} )

const menu = axios.create( {
	baseURL: 'http://wordpress-react.test/wp-json/cwp-routes/'
} )

export const pagesAPI = {
	getPageByID( pageID = 2 ) {
		return api.get( `pages/${pageID}` )
	}
}

export const menuAPI = {
	getMenuByName( menuName = 'menu-1' ) {
		return menu.get( `${menuName}` )
	}
}