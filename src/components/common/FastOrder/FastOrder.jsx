import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { Input, createField } from '../FormControls/FormControls'
import { required, maxLengthCreator } from '../../../utils/validators/validators'

import s from './FastOrder.module.scss'
import {
    hideForm,
    makeFastOrder,
    hideResponseMessage
} from '../../../redux/fast-order-reducer'
import {
    getResponseMessageFromState,
    getResponseMessageVisibilityFromState
} from '../../../redux/fast-order-selectors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const maxLength20 = maxLengthCreator( 20 )
const maxLength40 = maxLengthCreator( 40 )

const FastOrderForm = ( { handleSubmit, onSubmit, error } ) => {
    return (
    	<form id = "fast-order-form" className = { s.form } onSubmit = { handleSubmit( onSubmit ) }>
            <fieldset className = { s.fieldset }>
                <legend className = { s.legend }>Быстрый заказ</legend>
                <div className = { s.description }>
                    Мы свяжемся с Вами в течение 5 минут и примем Ваш заказ!
                </div>

                { createField( 'Ваше имя', 'fullname', 'input', [required, maxLength40], Input, { type: 'text' }, null ) }
                { createField( 'Ваш телефон', 'phone', 'input', [required, maxLength20], Input, { type: 'text' }, null ) }

                <div className = { s['form-field'] }>
                    { error && <div className = { s['form-error'] }>{ error }</div> }

                    <button type = "submit" form = "fast-order-form" className = "button">
                        Заказать!
                    </button>

                    <div className = { s.private }>
                        Примечание: Ваши данные НЕ будут переданы третьим лицам.
                    </div>
                </div>
            </fieldset>
    	</form>
    )
}

const FastOrderReduxForm = reduxForm( { form: 'fast-order-form' } )( FastOrderForm )

const FastOrder = ( props ) => {
	const onFormSubmit = ( formData ) => {
		props.makeFastOrder( formData.fullname, formData.phone )
	}

    return (
        <div className = { ( props.isVisible ? ( s.visible + ' ' ) : '' ) + s['popup-overlay'] }>
            <span className = { s['popup-overlay-close'] } onClick = { props.hideForm }>
                <FontAwesomeIcon icon = { faTimes } className = { s['popup-overlay-close__icon'] } />
            </span>
            <FastOrderReduxForm onSubmit = { onFormSubmit } />
            {
                props.responseMessageVisibility &&
                    <div className = { s['response-message'] }>
                        <span className = { s['response-message-close'] } onClick = { props.hideResponseMessage }>
                            <FontAwesomeIcon icon = { faTimes } className = { s['response-message-close__icon'] } />
                        </span>
                        <p className = { s['response-message__text'] }>{ props.responseMessage }</p>
                    </div>
            }
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    responseMessage             : getResponseMessageFromState( state ),
    responseMessageVisibility   : getResponseMessageVisibilityFromState( state )
} )

export default connect( mapStateToProps, {
    hideForm,
    makeFastOrder,
    hideResponseMessage
} )( FastOrder )