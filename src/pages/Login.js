import React from 'react'

const Login = () => {
    return (
        <div className="login-container">
            <h1>LOGIN FORM</h1>
            <form >
                <input type="text" placeholder="enter your email"/><br/>
                <input type="password" placeholder="enter your password"/><br/>
                <button>sumit</button>
            </form>
        </div>
    )
}

export default Login
