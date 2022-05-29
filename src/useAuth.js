import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:3000/login', {
            code,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            console.log(res.data)
            window.history.pushState({}, null, '/')
        }).catch(() => {
            window.location = '/'
        })
    
    }, [code])

    useEffect(() =>{

    }, [refreshToken, expiresIn])
    return accessToken
}
