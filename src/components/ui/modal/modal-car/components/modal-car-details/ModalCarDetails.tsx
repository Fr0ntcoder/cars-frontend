import { FC } from 'react'

import { NotFound } from '@/components/ui/not-found/NotFound'
import { Title } from '@/components/ui/title/Title'

import { useCarById } from '@/hooks/car/useCarById'

import styles from './ModalCarDetails.module.scss'

export type TModalCarDetailsProps = {
	id: string
}
export const ModalCarDetails: FC<TModalCarDetailsProps> = ({ id }) => {
	const { data, isLoading } = useCarById(id)

	if (isLoading) {
		return <span>Загрузка данных....</span>
	}
	if (!data) {
		return <NotFound />
	}

	return (
		<div className={styles.root}>
			<Title el='h4' title='Краткая информация' className={styles.title} />
			<div className={styles.info}>
				<span>Страна: </span>
				{data.city}
			</div>
			<div className={styles.info}>
				<span>Год выпуска: </span>
				{data.year}
			</div>
			<div className={styles.info}>
				<span>Привод: </span>
				{data.drive}
			</div>
			<div className={styles.info}>
				<span>Двигатель: </span>
				{data.engine}
			</div>
		</div>
	)
}
