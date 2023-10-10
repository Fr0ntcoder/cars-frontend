export interface IUser {
	id: string
	email: string
	name: string
	avatarPath: string
	phone: string
}

export interface IFullUser extends IUser {
	favorites: string[]
	orders: string[]
}
