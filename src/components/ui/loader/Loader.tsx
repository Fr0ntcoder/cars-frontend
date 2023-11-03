import { FC } from 'react'

import spinner from '@/assets/images/spinner.svg'

import styles from './Loader.module.scss'

export const Loader: FC = () => {
	return (
		<div className={styles.root}>
			<span className={styles.spinner}>
				<img src={spinner} alt='' />
			</span>
		</div>
	)
}
