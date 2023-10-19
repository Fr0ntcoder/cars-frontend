import { useQuery } from 'react-query'

import { CarService } from '@/service/car/car.service'

export const useCarsBody = (
	brandSlug: string | null,
	categorySlug: string | null
) => {
	return useQuery(
		['carBrandBody', brandSlug, categorySlug],
		() => CarService.getByBody(brandSlug, categorySlug),
		{
			select: data => data.data,
			enabled: !!brandSlug || !!categorySlug
		}
	)
}
