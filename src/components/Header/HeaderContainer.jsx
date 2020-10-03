import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { getMenuStructure } from '../../redux/menus-reducer'
import { getMenuStructureFromState } from '../../redux/menus-selectors'

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getMenuStructure( 'menu-1' )
	}

    render() {
        return <Header menu = { this.props.pageData } />
    }
}

let mapStateToProps = ( state ) => {
    return {
    	pageData: getMenuStructureFromState( state )
    }
}

export default connect( mapStateToProps, { getMenuStructure } )( HeaderContainer )