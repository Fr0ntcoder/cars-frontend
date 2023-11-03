import { FC } from 'react'
import { FaRegMeh } from 'react-icons/fa'

import styles from './NotFound.module.scss'

export const NotFound: FC = () => {
	return (
		<div className={styles.root}>
			Не найдено <FaRegMeh />
		</div>
	)
}
