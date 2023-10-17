import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button/Button'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import styles from './HeaderBtn.module.scss'

type THeaderBtnProps = {
	className?: string
}

export const HeaderBtn: FC<THeaderBtnProps> = ({ className }) => {
	return (
		<div className={clsx(styles.btn, className)}>
			<Link to={EnumConstantsRoutes.AUTH}>
				<Button variant='orange'>Войти</Button>
			</Link>
		</div>
	)
}
