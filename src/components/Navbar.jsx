import React from 'react';
import {Button, Avatar, Typography, Menu} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutLined} from '@ant-design/icons'
import cryptoIcon from '../assets/images/cryptocurrency.png';


export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={cryptoIcon}/>
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>CryptoWorld</Link>
                </Typography.Title>
                {/* <Button className='menu-container'></Button> */}
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to='/exchanges'>Exchange</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
