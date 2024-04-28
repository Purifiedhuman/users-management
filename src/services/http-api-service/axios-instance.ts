import axios from 'axios';

import { SESSION_STORAGE_KEY, USER_STORAGE_KEY } from '@/constants/localStorage';

const AXIOS_TIMEOUT = 10000;

export const backendAPIAxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_API_URL,
	timeout: AXIOS_TIMEOUT,
	withCredentials: true,

	headers: {
		'Content-Type': 'application/json'
	}
});

backendAPIAxiosInstance.interceptors.request.use(
	async config => config,
	error => Promise.reject(error)
);

backendAPIAxiosInstance.interceptors.response.use(
	response => response,
	error => Promise.reject(error)
);
