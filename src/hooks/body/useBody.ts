import { useQuery } from 'react-query'

import { BodyService } from '@/service/body/body.service'

export const useBody = () => {
	return useQuery(['carBody'], () => BodyService.getAll(), {
		select: data => data.data
	})
}
