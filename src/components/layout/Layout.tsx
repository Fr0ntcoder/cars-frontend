import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/layout/components/footer/Footer'
import { Header } from '@/components/layout/components/header/Header'

import styles from './Layout.module.scss'

export const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>
				<div className='container'>
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	)
}
