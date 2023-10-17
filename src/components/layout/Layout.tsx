import { FC, PropsWithChildren } from 'react'

import { Footer } from '@/components/layout/components/footer/Footer'
import { Header } from '@/components/layout/components/header/Header'

import styles from './Layout.module.scss'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>
				<div className='container'>{children}</div>
			</main>
			<Footer />
		</div>
	)
}
