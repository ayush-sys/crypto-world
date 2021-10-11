import React from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';



const { Text, Title } = Typography;
const { Option } = Select;


export default function News({simplified}) {

    const count = simplified ? 10 : 100;
    const {data:cryptoNews,  isFetching} = useGetCryptoNewsQuery({ newsCategory:'Cryptocurrencies', count:count });

    if(isFetching) return 'Loading .....';

    console.log(cryptoNews);

    return (
        <div>
            <h2>News</h2>
        </div>
    )
}
