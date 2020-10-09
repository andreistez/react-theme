import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {
    getLogotype,
    getMenuStructure,
    getPhoneFromREST,
    getButtonTextFromREST
} from '../../redux/header-reducer'
import {
    getLogoFromState,
    getMenuStructureFromState,
    getPhoneFromState,
    getButtonTextFromState
} from '../../redux/header-selectors'
import Preloader from '../common/Preloader/Preloader'

class HeaderContainer extends React.Component {
	componentDidMount() {
        this.props.getLogotype( 'header_logo' )
		this.props.getMenuStructure( 'menu-1' )
        this.props.getPhoneFromREST( 'header_phone_text' )
        this.props.getButtonTextFromREST( 'header_button' )
	}

    render() {
    	if ( this.props.menu.length === 0
             && ! this.props.logo
             && ! this.props.phone ) {
    		return <Preloader />
    	}	else {
    		return <Header  logo = { this.props.logo }
                            menu = { this.props.menu }
                            phone = { this.props.phone }
                            buttonText = { this.props.buttonText } />
    	}
    }
}

let mapStateToProps = ( state ) => {
    return {
        logo        : getLogoFromState( state ),
    	menu        : getMenuStructureFromState( state ),
        phone       : getPhoneFromState( state ),
        buttonText  : getButtonTextFromState( state )
    }
}

export default connect( mapStateToProps, {
    getLogotype,
    getMenuStructure,
    getPhoneFromREST,
    getButtonTextFromREST
} )( HeaderContainer )