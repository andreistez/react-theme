import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Page from './Page'
import { getPageContentBySlug } from '../../redux/pages-reducer'
import { getPageContentFromState } from '../../redux/pages-selectors'

class PageContainer extends React.Component {
	componentDidMount() {
		let pageSlug = this.props.match.params.pageSlug
		this.props.getPageContentBySlug( pageSlug )
	}

	componentDidUpdate( prevProps ) {
		let pageSlug = this.props.match.params.pageSlug

		if ( pageSlug !== prevProps.match.params.pageSlug ) {
			this.props.getPageContentBySlug( pageSlug )
		}
	}

    render = () => {
        return <Page content = { this.props.content } />
    }
}

let mapStateToProps = ( state ) => {
    return {
    	content: getPageContentFromState( state )
    }
}

let WithParamsPage = withRouter( PageContainer )

export default connect( mapStateToProps, { getPageContentBySlug } )( WithParamsPage )