import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/Button'
import { Head } from '@/components/ui/head/Head'
import { InputField } from '@/components/ui/input/InputField'
import { Title } from '@/components/ui/title/Title'

import { TAuthTypes } from '@/service/auth/auth.types'

import { IEmailPassword } from '@/store/user/user.interface'

import { useAuthText } from '@/hooks/auth/useAuthText'
import { useActions } from '@/hooks/other/useActions'

import styles from './Auth.module.scss'

export const Auth: FC = () => {
	const [type, setType] = useState<TAuthTypes>('login')
	const { text } = useAuthText(type)
	const { login, register } = useActions()
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		type === 'login' ? login(data) : register(data)
	}
	return (
		<>
			<Head title={text} />
			<div className={styles.root}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Title el='h3' title={text} />
					<InputField
						type='email'
						placeholder='Email'
						{...formRegister('email', {
							required: 'Введите Email'
						})}
						error={errors.email?.message}
					/>
					<InputField
						type='password'
						placeholder='Пароль'
						{...formRegister('password', {
							required: 'Введите пароль',
							minLength: {
								value: 6,
								message: 'Пароль должен быть не менее 6 символов'
							}
						})}
						error={errors.password?.message}
					/>
					<Button type='submit' variant='orange'>
						{text}
					</Button>
					<span
						className={styles.switch}
						onClick={() =>
							type === 'login' ? setType('register') : setType('login')
						}
					>
						{type === 'login' ? 'Зарегистрироваться' : 'Войти'}
					</span>
				</form>
			</div>
		</>
	)
}
