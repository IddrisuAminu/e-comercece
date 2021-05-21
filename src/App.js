
import './App.css';

import NavBar from './component/NavBar';
import{ Route,Switch}from "react-router-dom"
import Home from './pages/Home';
import Payment from './pages/Payment';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BankPayment from './component/BankPayment';
import Ntn from './component/Ntn';
import DirectPayment from './component/DirectPayment';
import BitConPayment from './component/BitConPayment';

function App() {
  return (
    <div className="App">
      
    <NavBar/>
    <Switch>
      <Route path="/home" component={Home} exact/>
      <Route path="/product" component={Product} />
      <Route path="/payment" component={Payment} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/bank" component={BankPayment} />
      <Route path="/direct" component={DirectPayment} />
      <Route path="/bit" component={BitConPayment} />
      <Route path="/ntm" component={Ntn} />
    </Switch>
    </div>
    
  );
}

export default App;
