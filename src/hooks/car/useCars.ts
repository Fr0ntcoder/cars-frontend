import { useQuery } from 'react-query'

import { CarService } from '@/service/car/car.service'

export const useCars = () => {
	return useQuery(['car'], () => CarService.getAll(), {
		select: data => data.data
	})
}
