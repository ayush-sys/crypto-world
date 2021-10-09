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
    <div className="app">

      {/* Navbar section */}
      <div className="navbar">
        <Navbar/>
      </div>

      {/* Main section */}
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


        {/* footer section*/}
        <div className="footer">
          <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
            CryptoWorld <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
