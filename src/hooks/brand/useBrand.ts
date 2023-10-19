import { useQuery } from 'react-query'

import { BrandService } from '@/service/brand/brand.service'

export const useBrand = () => {
	return useQuery(['brand'], () => BrandService.getAll(), {
		select: data => data.data
	})
}
