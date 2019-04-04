import React from 'react';
import axios from 'axios'

import Users from './Users'

axios.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token')
    return config
})

const MainApp = (props) => {
    return (
        <>
            <nav>
                <button onClick = {() => {
                    localStorage.removeItem('token')
                    props.updateAuth(false)
                    }}>Logout</button>
            </nav>
            <Users/>
        </>
    );
}

export default MainApp