import React from 'react'

const Page = props => {
    return <div dangerouslySetInnerHTML = {{ __html: props.content }} />
}

export default Page