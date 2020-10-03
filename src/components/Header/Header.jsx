import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'

const Header = ( props ) => {
    return (
        <header className = { s.header }>
        	<div className = { s['header-logo'] }>
                Header logo
        	</div>

        	<nav className = { s.navigation }>
                { props.menu.map( ( item, i ) => <a key = { i } href = "#">{ item.title }</a> ) }
            </nav>
        </header>
    )
}

export default Header