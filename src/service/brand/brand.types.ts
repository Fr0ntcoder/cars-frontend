import { TCar } from '@/service/car/car.types'

export type TBrand = {
	id: string
	name: string
	slug: string
	icon: string
	items: TCar[]
}

export type TBrandSlug = {
	brandSlug: string | null
	categorySlug: string | null
}
