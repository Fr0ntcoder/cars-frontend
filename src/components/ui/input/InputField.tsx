import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

import styles from './InputField.module.scss'

interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: string
}
export const InputField = forwardRef<HTMLInputElement, IInputField>(
	({ placeholder, error, className, type = 'text', style, ...rest }, ref) => {
		return (
			<label className={styles.input}>
				<input
					type={type}
					ref={ref}
					{...rest}
					className={clsx(styles.field, {
						[styles.error]: error
					})}
				/>
				{error && <span className={styles.input__error}>{error}</span>}
			</label>
		)
	}
)
