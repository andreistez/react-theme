import React from 'react'
import { connect } from 'react-redux'
import Main from './Main'
import { getCustomizerOption } from '../../redux/options-reducer'
import { getOptionFromState } from '../../redux/options-selectors'

class MainContainer extends React.Component {
    render() {
        return <Main />
    }
}

let mapStateToProps = ( state ) => {
    return {
    	option: getOptionFromState( state )
    }
}

export default connect( mapStateToProps, { getCustomizerOption } )( MainContainer )