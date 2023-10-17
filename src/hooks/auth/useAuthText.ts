import { useEffect, useState } from 'react'

import { TAuthTypes } from '@/service/auth/auth.types'

export const useAuthText = (type: TAuthTypes) => {
	const [text, setText] = useState('')

	useEffect(() => {
		type === 'login' ? setText('Войти') : setText('Зарегистрироваться')
	}, [type])

	return { text }
}
