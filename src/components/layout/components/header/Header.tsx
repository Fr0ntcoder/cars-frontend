import { FC } from 'react'

import { HeaderBtn } from '@/components/layout/components/header/components/header-btn/HeaderBtn'
import { HeaderUser } from '@/components/layout/components/header/components/header-user/HeaderUser'
import { GeoLocation } from '@/components/ui/location/GeoLocation'
import { Logo } from '@/components/ui/logo/Logo'

import { useAuth } from '@/hooks/auth/useAuth'

import styles from './Header.module.scss'

export const Header: FC = () => {
	const { user } = useAuth()
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.wrap}>
					<Logo className={styles.logo} />
					<GeoLocation className={styles.location} />
					{user ? <HeaderUser /> : <HeaderBtn />}
				</div>
			</div>
		</header>
	)
}
