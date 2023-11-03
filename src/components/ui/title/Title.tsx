import clsx from 'clsx'
import { FC } from 'react'

import styles from './Title.module.scss'

type TTitleProps = {
	el: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	title: string
	className?: string
}
export const Title: FC<TTitleProps> = ({ el, title, className }) => {
	if (el === 'h1') {
		return <h1 className={clsx(styles.title__h1, className)}>{title}</h1>
	}
	if (el === 'h2') {
		return <h2 className={clsx(styles.title__h2, className)}>{title}</h2>
	}
	if (el === 'h3') {
		return <h3 className={clsx(styles.title__h3, className)}>{title}</h3>
	}
	if (el === 'h4') {
		return <h4 className={clsx(styles.title__h4, className)}>{title}</h4>
	}
	if (el === 'h5') {
		return <h5 className={clsx(styles.title__h5, className)}>{title}</h5>
	}
	if (el === 'h6') {
		return <h6 className={clsx(styles.title__h6, className)}>{title}</h6>
	}
}
