import { TCar } from '@/service/car/car.types'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import { axiosDefault } from '@/api/api.interceptors'

export const CarService = {
	async getAll() {
		return await axiosDefault<TCar[]>({
			url: `${EnumConstantsRoutes.CAR}`,
			method: 'GET'
		})
	},
	async getById(id?: string) {
		return await axiosDefault<TCar>({
			url: `${EnumConstantsRoutes.CAR}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug?: string) {
		return await axiosDefault<TCar>({
			url: `${EnumConstantsRoutes.CAR}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByBody(brandSlug?: string, categorySlug?: string) {
		return await axiosDefault<TCar[]>({
			url: `${EnumConstantsRoutes.CAR}/${brandSlug}/${categorySlug}`,
			method: 'GET'
		})
	}
}
