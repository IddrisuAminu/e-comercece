import React from 'react'

const Ntn = () => {
    return (
        <div>
           <h1>NTM PAYMEN</h1> 
           <div  className="login-container">
             <form >



             <label for="type">Select Network</label>
                            <select >
                            <option>MTN</option>
                            <option>Vodafone</option>
                            <option>Tigo/Airtel</option>
                            <option>Others</option>
                        </select>
                        
                <input type="text" placeholder="full name"/>
                <input type="date" placeholder="date of birth"/>
                <input type="password" placeholder="password"/>
                <input type="password" placeholder="confirm password"/>
                <button>sumit</button>
            </form>
            <h1>any message</h1>
        </div>
        </div>
    )
}

export default Ntn
