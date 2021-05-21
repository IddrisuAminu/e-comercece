import React from 'react'
import{ Link} from "react-router-dom"
function NavBar  ()  {
    return (
    <nav>
        <div className="logo">
        <img src="./images/logo.png" alt="inmage"/>
            
        </div>
        <h1>Point of Sale System</h1>
        <div className="link">
            <ul>
               <li> <Link to="/home" className="hom">HOME</Link></li>
               <li> <Link to="/product" className="hom">PRODUCT</Link></li>
               <li><Link to="/payment" className="hom">PAYMENT</Link></li>  
               <li> <Link to="/contact" className="hom">CONTACT</Link></li> 
               <li> <Link to="/about" className="hom">ABOUT</Link></li>
                
                
                
            </ul>
            <Link to="/login"><button>login</button></Link>
            <Link to="/signup"> <button>signup</button></Link>
           
        </div>
    </nav>
    )
}

export default NavBar
