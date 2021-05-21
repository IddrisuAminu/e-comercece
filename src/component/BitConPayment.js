import React from 'react'

const BitConPayment = () => {
    return (
        <div >
        <div className="col-lg-4">
              <div className="big-bank" >
                  <div >Payment through Bitcon</div>
          
                      <div className="form-group">
                      
                          <input type="text"  required placeholder="Enter Your Accounts Name"/>
                      </div>
                      <div className="form-group">
                          
                          <input type="number"  required placeholder="Accounts Number"/>
                      </div>
                      <div class="form-group">
                      
                      <input type="number"  placeholder="Enter total amount"/>
                      </div>
                      <div className="form-group">
                          
                          <input type="number"  required placeholder="+233501010880"/>
                      </div>
                      <button type="submit" class="btn btn-success">Send</button>
                      <button type="reset" class="btn btn-danger">Cancel</button>
              
              </div>
          </div>
          </div>
    )
}

export default BitConPayment
