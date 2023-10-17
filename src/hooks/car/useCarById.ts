import { useQuery } from 'react-query'

import { CarService } from '@/service/car/car.service'

export const useCarById = (id: string) => {
	return useQuery(['carByid', id], () => CarService.getById(id), {
		select: data => data.data,
		enabled: !!id
	})
}
