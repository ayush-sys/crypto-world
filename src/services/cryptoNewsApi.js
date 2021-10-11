import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.REACT_APP_NEWS_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_NEWS_API_KEY
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createReq = (url) => ({url,headers:cryptoNewsApiHeaders});



export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews: builder.query({
            query:({newsCategory, count}) => createReq(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;
