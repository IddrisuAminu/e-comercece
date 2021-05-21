import React from "react";
import{Link} from "react-router-dom"
const Payment = () => {
  return (
    <div className="main-payment">
      
      <div> <h1 className="all">MAKE ALL PAYMENT HERE.....</h1></div>
     <div className="payment">
      <div className="payment-card">
        <div>
          <h2>PAYMENT METHOD</h2>
        </div   >
        
        <ul>
               <li> <Link to="/bank" className="hom"> <input type="radio"  /> Through Bankb</Link></li>
               <li> <Link to="/bit" className="hom"><input type="radio" /> Through Bitcon</Link></li>
               <li><Link to="/direct" className="hom"><input type="radio" /> Direct Payment</Link></li>  
               <li> <Link to="/ntm" className="hom"><input type="radio" /> NTM - Momo.</Link></li> 
                  
            </ul>
        <h1>any messagezzzzzzzzzzzzzzzz</h1>       
      </div>
      </div>
  
    </div>
  );
};

export default Payment;
