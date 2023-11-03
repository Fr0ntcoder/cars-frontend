import { useQuery } from 'react-query'

import { CarService } from '@/service/car/car.service'

export const useCarBySlug = (slug?: string) => {
	return useQuery(['carBySlug', slug], () => CarService.getBySlug(slug), {
		select: data => data.data,
		enabled: !!slug
	})
}
