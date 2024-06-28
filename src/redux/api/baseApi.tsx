import config from '@/lib/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: config.server_url }),
	endpoints: () => ({}),
	tagTypes: ['categories']
});

export default baseApi;