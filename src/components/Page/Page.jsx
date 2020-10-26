import React from 'react'
import s from './Page.module.scss'

const Page = props => {
    return <div dangerouslySetInnerHTML = {{ __html: props.content }} />
}

export default Page