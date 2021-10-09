import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createReq = (url) => ({url, headers:cryptoApiHeaders});


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos:builder.query({
            query: () => createReq('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;