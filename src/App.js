import React, { Component } from 'react'
import { Route, withRouter, BrowserRouter } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/redux-store'

import { initializeApp } from './redux/app-reducer'

import './App.css'
import Preloader from './components/common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer'
import ContactsContainer from './components/Contacts/ContactsContainer'
import MainContainer from './components/Main/MainContainer'

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if ( ! this.props.initialized ) {
            return <Preloader />
        }

        return (
            <div className = "app-wrapper">
                <HeaderContainer />

                <main>
                    <Route exact path = "/" render = {
                        () => <MainContainer />
                    } />
                    <Route path = "/kontakty" render = {
                        () => <ContactsContainer />
                    } />
                </main>
            </div>
        )
    }
}

let mapStateToProps = ( state ) => ( {
    initialized: state.app.initialized
} )

let AppContainer = compose(
    withRouter,
    connect( mapStateToProps, { initializeApp } )
)( App )

const ReactThemeApp = props => {
    return (
        <BrowserRouter>
            <Provider store = { store }>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default ReactThemeApp