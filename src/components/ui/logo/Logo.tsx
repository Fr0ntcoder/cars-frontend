import clsx from 'clsx'
import { FC } from 'react'
import { FaCar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import styles from './Logo.module.scss'

type TLogoProps = {
	className?: string
}

export const Logo: FC<TLogoProps> = ({ className }) => {
	return (
		<Link to='/' className={clsx(styles.logo, className)}>
			<FaCar className={styles.icon} />
		</Link>
	)
}
