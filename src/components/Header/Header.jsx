import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import FastOrder from '../common/FastOrder/FastOrder'

const Header = props => {
    return (
        <header className = { s.header }>
        	<div className = { s['header-logo'] }>
                <NavLink to = '/'>
                    <img className = { s['header-logo__img'] } src = { props.logo } alt = "" />
                </NavLink>
        	</div>

            <nav className = { s.navigation }>
                <button className = { s['mobile-menu__icon'] } onClick = { props.isMobileMenuOpen ? props.closeMobileMenu : props.openMobileMenu }>
                    {
                        props.isMobileMenuOpen
                            ? <FontAwesomeIcon icon = { faTimes } />
                            : <FontAwesomeIcon icon = { faBars } />
                    }
                </button>

                <ul className = {
                    s['header-menu'] + ' ' +
                    ( props.isMobileMenuOpen ? s['mobile-menu-open'] : s['mobile-menu-closed'] )
                }>
                    {
                        props.menu.map(
                            ( item, i ) => (
                                <li key = { i } className = { s['header-menu__item'] }>
                                    <NavLink className = { s['header-menu__link'] } to = { item.url } onClick = { props.closeMobileMenu }>
                                        { item.title }
                                    </NavLink>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>

            <div className = { s['header-phone'] }>
                <span className = { s['header-phone__icon'] }>
                    <FontAwesomeIcon icon = { faMobileAlt } />
                </span>
                <a href = { `tel:${props.phoneFiltered}` } title = { props.phone } className = { s['header-phone__link'] }>
                    { props.phone }
                </a>
            </div>

            <div className = { s['header-order'] }>
                <button
                    className   = { 'button ' + s['header-order__button'] }
                    title       = { props.buttonText }
                    onClick     = { props.showForm }>
                    { props.buttonText }
                </button>

                <FastOrder isVisible = { props.isVisible } />
            </div>
        </header>
    )
}

export default Header