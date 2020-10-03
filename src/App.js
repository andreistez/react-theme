import React, { Component } from 'react'
import './App.css'
import Preloader from './components/common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer'

class App extends Component {
    render() {
        return (
            <div className = "app-wrapper">
                <HeaderContainer />
            </div>
        )
    }
}

export default App
