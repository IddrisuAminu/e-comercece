import React from 'react'

const DirectPayment = () => {
    return (
        <div >
      <div className="col-lg-4">
            <div className="big-bank" >
                <div > Direct Payment</div>
        
                    <div className="form-group">
                    
                        <input type="text"  required placeholder="Enter Your  Name"/>
                    </div>
                    <div className="form-group">
                        
                        <input type="number"  required placeholder="Recept Number"/>
                    </div>
                    <div class="form-group">
                    
                    <input type="number"  placeholder="Enter total amount"/>
                    </div>
                    <div className="form-group">
                        
                        <input type="number"  required placeholder="phone number"/>
                    </div>
                    <button type="submit" class="btn btn-success">Send</button>
                    <button type="reset" class="btn btn-danger">Cancel</button>
            
            </div>
        </div>
        </div>
    )
}

export default DirectPayment
