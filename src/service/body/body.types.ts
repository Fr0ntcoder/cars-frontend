import { TCar } from '@/service/car/car.types'

export type TBody = {
	id: string
	name: string
	slug: string
	icon: string
	items: TCar[]
}
