import axios from 'axios'

import { getAccessToken, removeFromStorage } from '../service/auth/auth.helper'
import { AuthService } from '../service/auth/auth.service'

import { errorCatch, getContentType } from './api.helper'

export const axiosDefault = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType()
})

export const axiosInstance = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType()
})

axiosInstance.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosInstance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			error?.response?.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' &&
				error.config &&
				!error.config._retry)
		) {
			originalRequest._retry = true
			await AuthService.getNewTokens()

			try {
				return axiosInstance.request(originalRequest)
			} catch (err) {
				if (errorCatch(err) === 'jwt expired') {
					removeFromStorage()
				}
			}
		}

		throw error
	}
)
