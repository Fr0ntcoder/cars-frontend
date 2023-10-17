import { useQuery } from 'react-query'

import { UserService } from '@/service/user/user.service'

export const useProfile = () => {
	return useQuery(['profile'], () => UserService.getProfile(), {
		select: data => data.data
	})
}
