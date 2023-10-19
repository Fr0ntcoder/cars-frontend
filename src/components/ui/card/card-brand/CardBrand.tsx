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
		<li className={styles.item}>
			<Link
				to={`${EnumConstantsUrl.BRAND}/${item.slug}`}
				className={styles.link}
			>
				<span className={styles.icon}>
					<img src={item.icon} alt='' />
				</span>
				<h4 className={styles.title}>{item.name}</h4>
				<div className={styles.count}>
					количество автомобилей: <span>{item.items.length}</span>
				</div>
			</Link>
		</li>
	)
}
