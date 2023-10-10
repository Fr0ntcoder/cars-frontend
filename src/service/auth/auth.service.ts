import Cookies from 'js-cookie'

import { getContentType } from '../../api/api.helper'
import { axiosDefault } from '../../api/api.interceptors'
import { IAuthResponse, IEmailPassword } from '../../store/user/user.interface'
import { EnumConstants } from '../../types/constants.enum'

import { saveToStorage } from './auth.helper'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await axiosDefault<IAuthResponse>({
			url: `/${EnumConstants.AUTH}/${type}`,
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
			`/${EnumConstants.AUTH}/login/access-token`,
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
