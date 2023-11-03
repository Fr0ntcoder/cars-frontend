import { useQuery } from 'react-query'

import { BrandService } from '@/service/brand/brand.service'

export const useBrandBySlug = (slug?: string) => {
	return useQuery(['brandBySlug', slug], () => BrandService.getBySlug(slug), {
		select: data => data.data,
		enabled: !!slug
	})
}
