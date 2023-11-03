import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Auth } from '@/components/screens/auth/Auth'

import { useAuth } from '@/hooks/auth/useAuth'

import { EnumConstantsRoutes } from '@/types/constants.enum'

export const AuthPage: FC = () => {
	const navigate = useNavigate()
	const { user } = useAuth()

	useEffect(() => {
		if (user) {
			navigate(EnumConstantsRoutes.HOME, {
				replace: true,
				state: { from: location.pathname }
			})
		}
	}, [user])

	return <Auth />
}
