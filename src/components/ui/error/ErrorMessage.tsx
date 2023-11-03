import { FC } from 'react'
import { FaRegMeh } from 'react-icons/fa'

import styles from './ErrorMessage.module.scss'

export const ErrorMessage: FC = () => {
	return (
		<div className={styles.root}>
			Ошибка загрузки <FaRegMeh />
		</div>
	)
}
