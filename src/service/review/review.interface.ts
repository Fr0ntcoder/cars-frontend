import { IUser } from '@/service/user/user.interface'

export interface IReview {
	id: string
	createdAt: string
	rating: number
	text: string
	user?: IUser
	cardId?: string
}
