import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Title } from '@/components/ui/title/Title'

import { TBody } from '@/service/body/body.types'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import { dataBody } from '@/utils/data'

import styles from './CardBody.module.scss'

type TCardBodyProps = {
	item: TBody
	slug?: string
}
export const CardBody: FC<TCardBodyProps> = ({ item, slug }) => {
	const img = dataBody.find(el => el.id === item.id)?.img
	return (
		<li className={styles.carBody}>
			<Link
				to={`${EnumConstantsRoutes.CAR}/${slug}/${item.slug}`}
				className={styles.carBody__link}
			>
				<span className={styles.carBody__icon}>
					<img src={img} alt='' />
				</span>
				<Title el='h4' title={item.name} className={styles.carBody__title} />
			</Link>
		</li>
	)
}
