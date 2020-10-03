import React from 'react'
import s from './Preloader.module.scss'

let Preloader = ( props ) => {
	return (
		<div className = { s.loader }>
			<div className = { s['lds-default'] }>
				<div></div><div></div><div></div><div></div><div></div><div></div>
				<div></div><div></div><div></div><div></div><div></div><div></div>
			</div>
		</div>
	)
}

export default Preloader