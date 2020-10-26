import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {
    getLogotype,
    getMenuStructure,
    getPhoneFromREST,
    getButtonTextFromREST
} from '../../redux/header-reducer'
import { showForm } from '../../redux/fast-order-reducer'
import {
    getLogoFromState,
    getMenuStructureFromState,
    getPhoneFromState,
    getButtonTextFromState
} from '../../redux/header-selectors'
import { getVisibilityFromState } from '../../redux/fast-order-selectors'
import Preloader from '../common/Preloader/Preloader'

class HeaderContainer extends React.Component {
	componentDidMount() {
        this.props.getLogotype( 'header_logo' )
		this.props.getMenuStructure( 'menu-1' )
        this.props.getPhoneFromREST( 'header_phone_text' )
        this.props.getButtonTextFromREST( 'header_button' )
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
             || this.props.buttonText === '' ) {
    		return <Preloader />
    	}	else {
    		return (
                <Header
                    logo            = { this.props.logo }
                    menu            = { this.props.menu }
                    phone           = { this.props.phone }
                    phoneFiltered   = { this.clearPhone( this.props.phone ) }
                    buttonText      = { this.props.buttonText }
                    isVisible       = { this.props.isVisible }
                    showForm        = { this.props.showForm }
                    hideForm        = { this.props.hideForm }
                />
            )
    	}
    }
}

let mapStateToProps = ( state ) => {
    return {
        logo        : getLogoFromState( state ),
    	menu        : getMenuStructureFromState( state ),
        phone       : getPhoneFromState( state ),
        buttonText  : getButtonTextFromState( state ),
        isVisible   : getVisibilityFromState( state )
    }
}

export default connect( mapStateToProps, {
    getLogotype,
    getMenuStructure,
    getPhoneFromREST,
    getButtonTextFromREST,
    showForm
} )( HeaderContainer )