import { FC } from 'react'
import { Link } from 'react-router-dom'

import { TBody } from '@/service/body/body.types'

import { EnumConstantsUrl } from '@/types/constants.enum'

import styles from './CardBody.module.scss'

type TCardBodyProps = {
	item: TBody
	slug?: string
}
export const CardBody: FC<TCardBodyProps> = ({ item, slug }) => {
	return (
		<li className={styles.card__body}>
			<Link
				to={`/${EnumConstantsUrl.CAR}/${slug}/${item.slug}`}
				className={styles.card__body_link}
			>
				<span className={styles.card__body_icon}>
					<img src={item.icon} alt='' />
				</span>
				<h4 className={styles.card__body_title}>{item.name}</h4>
			</Link>
		</li>
	)
}
