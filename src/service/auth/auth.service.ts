import Cookies from 'js-cookie'

import { saveToStorage } from '@/service/auth/auth.helper'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { EnumConstantsUrl } from '@/types/constants.enum'

import { getContentType } from '@/api/api.helper'
import { axiosDefault } from '@/api/api.interceptors'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await axiosDefault<IAuthResponse>({
			url: `/${EnumConstantsUrl.AUTH}/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosDefault.post<string, { data: IAuthResponse }>(
			`/${EnumConstantsUrl.AUTH}/login/access-token`,
			{ refreshToken },
			{
				headers: getContentType()
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	}
}
