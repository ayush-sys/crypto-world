import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';


export default function Homepage() {
    const {data, isFetching} = useGetCryptosQuery();
    const globalStats = data?.data?.stats;

    console.log(data);
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
        </>
    )
}
