import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'

const Header = ( props ) => {
    return (
        <header className = { s.header }>
        	<div className = { s['header-logo'] }>
                <img className = { s['header-logo__img'] } src = { props.logo } alt = "" />
        	</div>

        	<nav className = { s.navigation }>
                {
                    props.menu.map(
                        ( item, i ) => <NavLink key = { i } to = { item.url }>{ item.title }</NavLink>
                    )
                }
            </nav>

            <div className = { s['header-phone'] }>
                { props.phone }
            </div>

            <div className = { s['header-order'] }>
                <button className = "button">
                    { props.buttonText }
                </button>
            </div>
        </header>
    )
}

export default Header