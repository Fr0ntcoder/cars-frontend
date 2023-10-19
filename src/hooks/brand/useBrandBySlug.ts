import { useQuery } from 'react-query'

import { BrandService } from '@/service/brand/brand.service'

export const useBrandBySlug = (slug: string | null) => {
	return useQuery(
		['brandBySlug', slug],
		() => BrandService.getBySlug(slug || null),
		{
			select: data => data.data,
			enabled: !!slug
		}
	)
}
