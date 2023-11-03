/* import { axiosInstance } from '@/api/api.interceptors' */
import { IFullUser, IUser } from '@/service/user/user.interface'
import { TUserData } from '@/service/user/user.types'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import { axiosInstance } from '@/api/api.interceptors'

export const UserService = {
	async getProfile() {
		return await axiosInstance<IFullUser>({
			url: `${EnumConstantsRoutes.USER}/profile`,
			method: 'GET'
		})
	},
	async updateProfile(data: TUserData) {
		return await axiosInstance({
			url: `${EnumConstantsRoutes.USER}/profile`,
			method: 'PUT',
			data
		})
	},
	async toogleFavorite(carId: string | number) {
		return axiosInstance<IUser>({
			url: `${EnumConstantsRoutes.USER}/profile/favorites/${carId}`,
			method: 'PATCH'
		})
	}
}
