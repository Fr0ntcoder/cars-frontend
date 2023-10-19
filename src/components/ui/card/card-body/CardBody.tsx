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
		<li className={styles.item}>
			<Link
				to={`/${EnumConstantsUrl.CAR}/${slug}/${item.slug}`}
				className={styles.link}
			>
				<span className={styles.icon}>
					<img src={item.icon} alt='' />
				</span>
				<h4 className={styles.title}>{item.name}</h4>
			</Link>
		</li>
	)
}
