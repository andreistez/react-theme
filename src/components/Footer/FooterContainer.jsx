import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'
import {
    getFooterLogotype,
    getFooterMenuStructure,
    getFooterPhoneFromREST,
    getFooterButtonTextFromREST,
    getFooterCopyrightsFromREST
} from '../../redux/footer-reducer'
import {
    getFooterLogoFromState,
    getFooterMenuStructureFromState,
    getFooterPhoneFromState,
    getFooterButtonTextFromState,
    getFooterCopyrightsFromState
} from '../../redux/footer-selectors'
import Preloader from '../common/Preloader/Preloader'

class FooterContainer extends React.Component {
	componentDidMount() {
        this.props.getFooterLogotype( 'footer_logo' )
		this.props.getFooterMenuStructure( 'menu-footer' )
        this.props.getFooterPhoneFromREST( 'footer_phone_text' )
        this.props.getFooterButtonTextFromREST( 'footer_button' )
        this.props.getFooterCopyrightsFromREST( 'footer_text' )
	}

    clearPhone = ( phone ) => {
        // Convert phone number string to array.
        let phoneArray = phone.split( '' )
        // Remove unnecessary characters.
        let phoneFiltered = phoneArray.filter( symbol => {
            if ( symbol !== '('
                 && symbol !== ')'
                 && symbol !== '-'
                 && symbol !== ' ' ) {
                return symbol
            }
        } )

        // Return filtered array converted to string phone number.
        return phoneFiltered.join( '' )
    }

    render = () => {
    	if ( this.props.menu.length === 0
             || ! this.props.logo
             || ! this.props.phone
             || this.props.buttonText === ''
             || this.props.copyrights === '' ) {
    		return <Preloader />
    	}	else {
    		return <Footer  logo = { this.props.logo }
                            menu = { this.props.menu }
                            phone = { this.props.phone }
                            phoneFiltered = { this.clearPhone( this.props.phone ) }
                            buttonText = { this.props.buttonText }
                            copyrights = { this.props.copyrights } />
    	}
    }
}

let mapStateToProps = ( state ) => {
    return {
        logo        : getFooterLogoFromState( state ),
    	menu        : getFooterMenuStructureFromState( state ),
        phone       : getFooterPhoneFromState( state ),
        buttonText  : getFooterButtonTextFromState( state ),
        copyrights  : getFooterCopyrightsFromState( state )
    }
}

export default connect( mapStateToProps, {
    getFooterLogotype,
    getFooterMenuStructure,
    getFooterPhoneFromREST,
    getFooterButtonTextFromREST,
    getFooterCopyrightsFromREST
} )( FooterContainer )