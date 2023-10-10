import { axiosInstance } from '../../api/api.interceptors'
import { EnumConstants } from '../../types/constants.enum'

import { IFullUser } from './user.interface'
import { TUserData } from './user.types'

export const UserService = {
	async getProfile() {
		return axiosInstance<IFullUser>({
			url: `${EnumConstants.USER}/profile`,
			method: 'GET'
		})
	},

	async updateProfile(data: TUserData) {
		return axiosInstance({
			url: `${EnumConstants.USER}/profile`,
			method: 'PUT',
			data
		})
	}

	/* async toogleFavorite(carId: string | number) {
        return axiosInstance({
			url: `${EnumConstants.USER}/profile`,
			method: 'PATCH',
		})
    } */
}
