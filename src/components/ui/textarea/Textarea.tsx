import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

import styles from './Textarea.module.scss'

interface ITextarea extends InputHTMLAttributes<HTMLTextAreaElement> {
	placeholder: string
	error?: string
	className?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
	({ placeholder, error, className, type = 'text', style, ...rest }, ref) => {
		return (
			<label className={clsx(styles.textarea, className)}>
				<textarea
					placeholder={placeholder}
					ref={ref}
					{...rest}
					className={clsx(styles.textarea__field, {
						[styles.textarea__field_error]: error
					})}
				/>
				{error && <span className={styles.textarea__error}>{error}</span>}
			</label>
		)
	}
)
