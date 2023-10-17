/* import { axiosInstance } from '@/api/api.interceptors' */
import { IFullUser } from '@/service/user/user.interface'
import { TUserData } from '@/service/user/user.types'

import { EnumConstantsUrl } from '@/types/constants.enum'

import { axiosInstance } from '@/api/api.interceptors'

export const UserService = {
	async getProfile() {
		return await axiosInstance<IFullUser>({
			url: `${EnumConstantsUrl.USER}/profile`,
			method: 'GET'
		})
	},
	async updateProfile(data: TUserData) {
		return await axiosInstance({
			url: `${EnumConstantsUrl.USER}/profile`,
			method: 'PUT',
			data
		})
	}
	/* async toogleFavorite(carId: string | number) {
        return axiosInstance({
			url: `${EnumConstants.USER}/profile`,
			method: 'PATCH',
		})
    })*/
}
