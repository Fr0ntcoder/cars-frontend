import { TReview } from '@/service/review/review.types'

import { EnumConstantsUrl } from '@/types/constants.enum'

import { axiosDefault, axiosInstance } from '@/api/api.interceptors'

export const ReviewService = {
	async getAll() {
		return await axiosDefault<TReview[]>({
			url: `${EnumConstantsUrl.REVIEW}`,
			method: 'GET'
		})
	},

	async getById(id: string) {
		return await axiosDefault<TReview>({
			url: `${EnumConstantsUrl.REVIEW}/${id}`,
			method: 'GET'
		})
	},

	async create(carId: string, data: TReview) {
		return await axiosInstance<TReview>({
			url: `${EnumConstantsUrl.REVIEW}/create/${carId}`,
			method: 'POST',
			data
		})
	}
}
