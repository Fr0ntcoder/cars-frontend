import { TBody } from '@/service/body/body.types'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import { axiosDefault } from '@/api/api.interceptors'

export const BodyService = {
	async getAll() {
		return await axiosDefault<TBody[]>({
			url: `${EnumConstantsRoutes.BODY}`,
			method: 'GET'
		})
	},
	async getBySlug(slug?: string) {
		return await axiosDefault<TBody>({
			url: `${EnumConstantsRoutes.BODY}/${slug}`,
			method: 'GET'
		})
	}
}
