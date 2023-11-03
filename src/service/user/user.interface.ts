import { TCar } from '@/service/car/car.types'
import { IReviewFull } from '@/service/review/review.interface'

export interface IUser {
	id: string
	email: string
	name: string
	avatarPath: string
	phone: string
}

export interface IFullUser extends IUser {
	favorites: TCar[]
	reviews: IReviewFull[]
}
