import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.root}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}
