import { TBody } from '@/service/body/body.types'

import { EnumConstantsUrl } from '@/types/constants.enum'

import { axiosDefault } from '@/api/api.interceptors'

export const BodyService = {
	async getAll() {
		return await axiosDefault<TBody[]>({
			url: `/${EnumConstantsUrl.BODY}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return await axiosDefault<TBody>({
			url: `${EnumConstantsUrl.BODY}/${slug}`,
			method: 'GET'
		})
	}
}
