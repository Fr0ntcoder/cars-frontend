import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { Layout } from '@/components/layout/Layout'
import { CardCar } from '@/components/ui/card/card-car/CardCar'
import { ListGroup } from '@/components/ui/list-group/ListGroup'

import { useCarsBody } from '@/hooks/car/useCarsBody'

import styles from './BodySingle.module.scss'

export const BodySingle: FC = () => {
	const { brandSlug, categorySlug } = useParams()
	const { data, isLoading, isError } = useCarsBody(
		brandSlug || null,
		categorySlug || null
	)

	if (isLoading) {
		return <div>Загрузка....</div>
	}

	if (isError || !data) {
		return <div className={styles.empty}>Ошибка...</div>
	}

	const list = data.map(item => <CardCar key={item.id} item={item} />)

	return (
		<Layout>
			{data.length === 0 ? (
				<div className={styles.empty}>Ничего не найдено</div>
			) : (
				<ListGroup column={3}>{list}</ListGroup>
			)}
		</Layout>
	)
}
