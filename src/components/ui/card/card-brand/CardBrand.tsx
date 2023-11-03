import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Title } from '@/components/ui/title/Title'

import { TBrand } from '@/service/brand/brand.types'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import { dataBrand } from '@/utils/data'

import styles from './CardBrand.module.scss'

type TCardBrandProps = {
	item: TBrand
}

export const CardBrand: FC<TCardBrandProps> = ({ item }) => {
	const img = dataBrand.find(el => el.id === item.id)?.img
	return (
		<li className={styles.cardBrand}>
			<Link
				to={`${EnumConstantsRoutes.BRAND}/${item.slug}`}
				className={styles.cardBrand__link}
			>
				<span className={styles.cardBrand__icon}>
					<img src={img} alt='' />
				</span>
				<Title el='h4' title={item.name} className={styles.cardBrand__title} />
				<div className={styles.cardBrand__count}>
					количество автомобилей: <span>{item.items.length}</span>
				</div>
			</Link>
		</li>
	)
}
