import { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/auth/useAuth'

import { EnumConstantsRoutes } from '@/types/constants.enum'

interface RequireAuthProps {
	children: ReactNode
}
export const PrivateRoute: React.FC<RequireAuthProps> = ({ children }) => {
	const navigate = useNavigate()
	const location = useLocation()
	const { user } = useAuth()

	useEffect(() => {
		if (!user) {
			navigate(EnumConstantsRoutes.LOGIN, {
				replace: true,
				state: { from: location.pathname }
			})
		}
	}, [user])

	return user ? children : null
}
