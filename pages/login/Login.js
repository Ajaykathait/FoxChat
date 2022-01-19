import React from 'react'
import { auth, provider } from '../../firebase'

export default function Login() {
    const signIn =()=>{
        auth.signInWithPopup(provider).catch(alert)
    }
    return (
        <>
            <button onClick={signIn}>Sign in with Google</button>
        </>
    )
}
