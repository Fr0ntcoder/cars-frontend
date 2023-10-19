import { TCar } from '@/service/car/car.types'

import { EnumConstantsUrl } from '@/types/constants.enum'

import { axiosDefault } from '@/api/api.interceptors'

export const CarService = {
	async getAll() {
		return await axiosDefault<TCar[]>({
			url: `${EnumConstantsUrl.CAR}`,
			method: 'GET'
		})
	},
	async getById(id: string) {
		return await axiosDefault<TCar>({
			url: `${EnumConstantsUrl.CAR}/${id}`,
			method: 'GET'
		})
	},

	async getByBody(brandSlug: string | null, categorySlug: string | null) {
		return await axiosDefault<TCar[]>({
			url: `${EnumConstantsUrl.CAR}/${brandSlug}/${categorySlug}`,
			method: 'GET'
		})
	}
}
