import { User } from '@/types/user';

import { backendAPIAxiosInstance } from './axios-instance';

export type PostAuthLoginRequestBody = {
	email: string;
	password: string;
};
export type PostAuthRegisterRequestBody = PostAuthLoginRequestBody;

export const authHttpService = {
	postAuthLogin: (data: PostAuthLoginRequestBody) => backendAPIAxiosInstance.post(`/login?useCookies=true`, data),
	postAuthRegister: (data: PostAuthRegisterRequestBody) => backendAPIAxiosInstance.post(`/register`, data),
	getAuthMeInfo: () => backendAPIAxiosInstance.get<User>(`/manage/info`)
};
