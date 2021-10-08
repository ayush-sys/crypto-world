import './App.css';
import {Route, Switch, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/Cryptodetails';
import News from './components/News';


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage/>
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges/>
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies/>
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails/>
              </Route>
              <Route exact path='/news'>
                <News/>
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
