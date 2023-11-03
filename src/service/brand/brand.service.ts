import { TBrand } from '@/service/brand/brand.types'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import { axiosDefault } from '@/api/api.interceptors'

export const BrandService = {
	async getAll() {
		return await axiosDefault<TBrand[]>({
			url: `${EnumConstantsRoutes.BRAND}`,
			method: 'GET'
		})
	},
	async getBySlug(slug?: string) {
		return await axiosDefault<TBrand>({
			url: `${EnumConstantsRoutes.BRAND}/${slug}`,
			method: 'GET'
		})
	}
}
