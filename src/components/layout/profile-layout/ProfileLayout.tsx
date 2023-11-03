import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/layout/components/sidebar/Sidebar'

import styles from './ProfileLayout.module.scss'

export const ProfileLayout: FC = () => {
	return (
		<div className='container'>
			<div className={styles.profileLayout}>
				<Sidebar />
				<main className={styles.profileLayout__main}>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
