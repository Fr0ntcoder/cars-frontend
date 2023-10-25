import { FC } from 'react'
import { Link } from 'react-router-dom'

import { TBrand } from '@/service/brand/brand.types'

import { EnumConstantsUrl } from '@/types/constants.enum'

import styles from './CardBrand.module.scss'

type TCardBrandProps = {
	item: TBrand
}
export const CardBrand: FC<TCardBrandProps> = ({ item }) => {
	return (
		<li className={styles.card__brand}>
			<Link
				to={`${EnumConstantsUrl.BRAND}/${item.slug}`}
				className={styles.card__brand_link}
			>
				<span className={styles.card__brand_icon}>
					<img src={item.icon} alt='' />
				</span>
				<h4 className={styles.card__brand_title}>{item.name}</h4>
				<div className={styles.card__brand_count}>
					количество автомобилей: <span>{item.items.length}</span>
				</div>
			</Link>
		</li>
	)
}
