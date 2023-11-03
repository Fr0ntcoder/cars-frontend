import { IReviewFull } from '@/service/review/review.interface'

export type TCar = {
	id: string
	name: string
	slug: string
	description: string
	price: number
	city: string
	volume: number
	power: number
	box: string
	engine: string
	drive: string
	class: string
	year: number
	images: string[]
	reviews: IReviewFull[]
	carCategoryId: string
}
