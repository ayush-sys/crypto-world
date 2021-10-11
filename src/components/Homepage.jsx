import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';



export default function Homepage() {
    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    // console.log(data);
    if(isFetching) return 'Loading .....';


    return (
        <>
            <Typography.Title level={2}>Global crypto stats</Typography.Title>
            <Row>
                <Col span={12}>
                    <Statistic title='Total crypto currencies' value={globalStats.total}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total exchanges' value={millify(globalStats.totalExchanges)}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market cap' value={`$${millify(globalStats.totalMarketCap)}`}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total 24h Volume' value={`$${millify(globalStats.total24hVolume)}`}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}/>
                </Col>
            </Row>

            {/* Crpyto section */}
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
            </div>
            <Cryptocurrencies simplified/>

            {/* Crpyto News section */}
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
                <Typography.Title level={3}><Link to="/news">Show more</Link></Typography.Title>
            </div>
            <News simplified />
        </>
    )
}
