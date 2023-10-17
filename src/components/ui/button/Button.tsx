import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant: 'white' | 'black' | 'orange'
}

export const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	variant = 'white',
	children,
	...rest
}) => {
	return (
		<button
			className={clsx(styles.btn, className, {
				[styles.white]: variant === 'white',
				[styles.black]: variant === 'black',
				[styles.orange]: variant === 'orange'
			})}
			{...rest}
		>
			{children}
		</button>
	)
}
