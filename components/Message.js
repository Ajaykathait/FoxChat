import React from 'react'

export default function Message({user,message}) {
    return (
        <>
            <div className="message">
                {message.messages}
            </div>
        </>
    )
}
