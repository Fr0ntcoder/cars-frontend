import { IReview } from '@/service/review/review.interface'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import { axiosDefault, axiosInstance } from '@/api/api.interceptors'

export const ReviewService = {
	async getAll() {
		return await axiosDefault<IReview[]>({
			url: `${EnumConstantsRoutes.REVIEW}`,
			method: 'GET'
		})
	},

	async getById(id: string) {
		return await axiosDefault<IReview>({
			url: `${EnumConstantsRoutes.REVIEW}/${id}`,
			method: 'GET'
		})
	},

	async create(carId?: string, data?: IReview) {
		return await axiosInstance<IReview>({
			url: `${EnumConstantsRoutes.REVIEW}/create/${carId}`,
			method: 'POST',
			data
		})
	}
}
