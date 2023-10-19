import { TBrand } from '@/service/brand/brand.types'

import { EnumConstantsUrl } from '@/types/constants.enum'

import { axiosDefault } from '@/api/api.interceptors'

export const BrandService = {
	async getAll() {
		return await axiosDefault<TBrand[]>({
			url: `/${EnumConstantsUrl.BRAND}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string | null) {
		return await axiosDefault<TBrand>({
			url: `${EnumConstantsUrl.BRAND}/${slug}`,
			method: 'GET'
		})
	}
}
