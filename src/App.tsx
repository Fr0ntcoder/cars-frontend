import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Routing } from 'routing/Routing'

import '@/assets/styles/index.scss'

import { getAccessToken } from '@/service/auth/auth.helper'

import { useAuth } from '@/hooks/auth/useAuth'
import { useActions } from '@/hooks/other/useActions'

import '@/utils/locale'

function App() {
	const { user } = useAuth()

	const { checkAuth, logout } = useActions()

	useEffect(() => {
		const accessToken = getAccessToken()

		if (!accessToken) {
			checkAuth()
		}
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) {
			logout()
		}
	}, [])

	return <Routing />
}

export default App
