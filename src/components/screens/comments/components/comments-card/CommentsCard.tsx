import moment from 'moment'
import { FC } from 'react'
import { FaStar } from 'react-icons/fa'

import { IReview } from '@/service/review/review.interface'

import styles from './CommentsCard.module.scss'

type TCommentsCardProps = {
	item: IReview
}

export const CommentsCard: FC<TCommentsCardProps> = ({ item }) => {
	return (
		<div className={styles.commentsCard}>
			<div className={styles.commentsCard__top}>
				<span className={styles.commentsCard__text}>{item.text}</span>
				<span className={styles.commentsCard__rating}>
					<FaStar /> {item.rating}
				</span>
			</div>
			<div className={styles.commentsCard__date}>
				{moment(item.createdAt).format('LL')}
			</div>
		</div>
	)
}
