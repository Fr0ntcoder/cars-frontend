import { FC } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import { Head } from '@/components/ui/head/Head'
import { Loader } from '@/components/ui/loader/Loader'
import { Title } from '@/components/ui/title/Title'

import { useProfile } from '@/hooks/profile/useProfile'

import styles from './Profile.module.scss'

export const Profile: FC = () => {
	const { data, isLoading, isError } = useProfile()

	if (isLoading) {
		return <Loader />
	}

	if (isError || !data) {
		return <div>Не найдено</div>
	}
	console.log(data)
	return (
		<>
			<Head title='Мой профиль' />
			<div className={styles.profile}>
				<Title el='h3' title='Мой профиль' className={styles.profile__title} />
				<span className={styles.profile__avatar}>
					<img src={data.avatarPath} alt='' />
				</span>
				<Title el='h4' title={data.name} className={styles.profile__name} />
				<span className={styles.profile__info}>
					<FaEnvelope />
					{data.email}
				</span>
				<span className={styles.profile__info}>
					<FaPhone />
					{data.phone}
				</span>
			</div>
		</>
	)
}
