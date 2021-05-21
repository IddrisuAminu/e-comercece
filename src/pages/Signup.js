import React from 'react'

const Signup = () => {
    return (
        <div  className="login-container">
             <form >
                <input type="text" placeholder="full name"/>
                <input type="date" placeholder="date of birth"/>
                <input type="password" placeholder="password"/>
                <input type="password" placeholder="confirm password"/>
                <button>sumit</button>
            </form>
        </div>
    )
}

export default Signup
