import React,{useState} from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';


const { Text, Title } = Typography;
const { Option } = Select;
const demoImageUrl = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


export default function News({simplified}) {

    const count = simplified ? 6 : 24;
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const {data:cryptoNews,  isFetching} = useGetCryptoNewsQuery({ newsCategory:newsCategory, count:count });
    const {data:cryptoCoins} = useGetCryptosQuery(100);


    if(isFetching) return 'Loading .....';


    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                        <Select showSearch className='select-news' 
                            placeholder='Select a crypto' 
                            optionFilterProp='children' 
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option vlaue='Cryptocurrency'>Cryptocurrency</Option>
                            {cryptoCoins?.data?.coins.map((coin) => (
                                <Option vlaue={coin.name}>{coin.name}</Option>
                            ))}
                        </Select>
                </Col>
            )}
            {cryptoNews.value.map((news) => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                    <Card hoverable className='news-card'>
                        <a href={news.url} target='_blank' rel='norefferer'>
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>{news.name}</Title>
                                <img src={news?.image?.thumbnail?.contentUrl || demoImageUrl} style={{maxWidth:'200px', maxHeight:'100px'}}/>
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl} alt="" />
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
