import { FC } from 'react'

import { CardCar } from '@/components/ui/card/card-car/CardCar'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { Head } from '@/components/ui/head/Head'
import { ListGroup } from '@/components/ui/list-group/ListGroup'
import { Loader } from '@/components/ui/loader/Loader'
import { NotFound } from '@/components/ui/not-found/NotFound'
import { Title } from '@/components/ui/title/Title'

import { useProfile } from '@/hooks/profile/useProfile'

import styles from './Favorites.module.scss'

export const Favorites: FC = () => {
	const { data, isLoading, isError } = useProfile()

	if (isLoading) {
		return <Loader />
	}

	if (isError || !data) {
		return <ErrorMessage />
	}

	if (data.favorites.length === 0) {
		return <NotFound />
	}

	const list = data.favorites.map(item => <CardCar key={item.id} item={item} />)

	return (
		<>
			<Head title='Избранное' />
			<div className={styles.favorites}>
				<Title el='h4' title='Избранное' className={styles.favorites__title} />
				<ListGroup column={3}>{list}</ListGroup>
			</div>
		</>
	)
}
