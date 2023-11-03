import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/layout/components/header/Header'

import styles from './MainLayout.module.scss'

export const MainLayout: FC = () => {
	return (
		<div className='container'>
			<Header />
			<main className={styles.mainLayout}>
				<Outlet />
			</main>
		</div>
	)
}
