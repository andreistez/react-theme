import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = ( props ) => {
    return (
        <footer className = { s.footer }>
        	<div className = { s['footer-logo'] }>
                <img className = { s['footer-logo__img'] } src = { props.logo } alt = "" />
        	</div>

        	<nav className = { s['footer-navigation'] }>
                <ul className = { s['footer-menu'] }>
                    {
                        props.menu.map(
                            ( item, i ) => (
                                <li key = { i } className = { s['footer-menu__item'] }>
                                    <NavLink className = { s['footer-menu__link'] } to = { item.url }>
                                        { item.title }
                                    </NavLink>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>

            <div className = { s['footer-phone'] }>
                <span className = { s['footer-phone__icon'] }>
                    <FontAwesomeIcon icon = { faMobileAlt } />
                </span>
                <a href = { `tel:${props.phoneFiltered}` } title = { props.phone } className = { s['footer-phone__link'] }>
                    { props.phone }
                </a>
            </div>

            <div className = { s['footer-order'] }>
                <button className = { 'button ' + s['footer-order__button'] } title = { props.buttonText }>
                    { props.buttonText }
                </button>
            </div>

            <div className = { s['footer-bottom'] } dangerouslySetInnerHTML = {{ __html: props.copyrights }} />
        </footer>
    )
}

export default Footer