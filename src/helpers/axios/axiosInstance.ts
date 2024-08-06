import { authKey } from '@/constants/authKey';
import { useAppSelector } from '@/redux/hooks';
import { TGenericErrorResponse, TResponseSuccess } from '@/types';
import { getFromLocalStorage } from '@/utils/local-storage';
import axios from 'axios';

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers['Accept'] = 'application/json';
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		const accessToken = useAppSelector((state) => state.auth.token);
		if (accessToken) {
			config.headers.Authorization = accessToken;
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
	//@ts-ignore
	function (response) {
		const responseObj: TResponseSuccess = {
			success: response?.data?.success,
			message: response?.data?.message,
			data: response?.data?.data,
			meta: response?.data?.meta
		};

		return responseObj;
	},
	function (error) {
		const responseObj: TGenericErrorResponse = {
			success: error?.response?.data?.success,
			statusCode: error?.response?.status || 500,
			message: error?.response?.data?.message || 'Something went wrong!',
			errorMassages: error?.response?.data?.message || 'Something went wrong!'
		};
		return responseObj;
	}
);

export default axiosInstance;
