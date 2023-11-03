import moment from 'moment'
import { FC } from 'react'
import { FaStar } from 'react-icons/fa'

import { IReview } from '@/service/review/review.interface'

import styles from './CardReview.module.scss'

type TCardReviewProps = {
	item: IReview
}

export const CardReview: FC<TCardReviewProps> = ({ item }) => {
	return (
		<div className={styles.cardReview}>
			<div className={styles.cardReview__top}>
				<span className={styles.cardReview__avatar}>
					<img src={item.user?.avatarPath} alt='' />
				</span>
				<div className={styles.cardReview__content}>
					<h4 className={styles.cardReview__name}>{item.user?.name}</h4>
					<span className={styles.cardReview__email}>{item.user?.email}</span>
				</div>
				<span className={styles.cardReview__rating}>
					<FaStar /> {item.rating}
				</span>
			</div>
			<div className={styles.cardReview__text}>{item.text}</div>
			<div className={styles.cardReview__date}>
				{moment(item.createdAt).format('LL')}
			</div>
		</div>
	)
}
