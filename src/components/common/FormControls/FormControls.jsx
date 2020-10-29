import React from 'react'
import { Field } from 'redux-form'
import s from './FormControls.module.scss'
import orderStyles from '../FastOrder/FastOrder.module.scss'

const FormControl = ( { input, meta: { touched, error }, child, ...props } ) => {
	let hasError = touched && error

	return (
		<div className = { s['textarea-wrapper'] }>
			{ props.children }
			<div className = { s['error-text'] }>
				{ hasError && error }
			</div>
		</div>
	)
}

export const Textarea = props => {
	const { input, meta, child, ...restProps } = props
	return <FormControl { ...props }><textarea { ...input } { ...restProps } /></FormControl>
}

export const Input = props => {
	const { input, meta, child, ...restProps } = props
	return <FormControl { ...props }><input { ...input } { ...restProps } /></FormControl>
}

export const createField = ( placeholder, name, className, validators, component, props = {}, text = '' ) => {
	return (
		<div className = { orderStyles['form-field'] }>
			<Field	name = { name }
		            className = { className }
		            component = { component }
		            placeholder = { placeholder }
		            validate = { validators }
		            { ...props } /> { text }
		</div>
	)
}