import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import { Button } from '@/components/ui/button/Button'
import { Textarea } from '@/components/ui/textarea/Textarea'
import { Title } from '@/components/ui/title/Title'

import { ReviewService } from '@/service/review/review.service'

/* import { Rating } from 'react-simple-star-rating' */
import { useAuth } from '@/hooks/auth/useAuth'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import styles from './CarAddReview.module.scss'

type TComment = {
	comment: string
}
type TCarAddReviewProps = {
	id: string
}
export const CarAddReview: FC<TCarAddReviewProps> = ({ id }) => {
	const [rating, setRating] = useState(0)
	const { user } = useAuth()
	const queryClient = useQueryClient()

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues
	} = useForm<TComment>({
		mode: 'onChange'
	})

	const { mutate } = useMutation(
		['useReviewAdd'],
		() =>
			ReviewService.create(id, {
				text: getValues('comment'),
				rating
			}),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['carBySlug'])
			}
		}
	)
	const onHandler = (r: number) => {
		setRating(r)
	}
	const onSubmit = (data: TComment) => {
		mutate()
	}

	if (!user) {
		return (
			<div className={styles.carAddReview__empty}>
				Чтобы оставить отзыв,
				<Link to={EnumConstantsRoutes.AUTH}> авторизуйтесь</Link>
			</div>
		)
	}

	return (
		<form className={styles.carAddReview} onSubmit={handleSubmit(onSubmit)}>
			<Title
				el='h3'
				title='Оставить отзыв'
				className={styles.carAddReview__title}
			/>
			<Rating onClick={onHandler} className={styles.carAddReview__rating} />
			<Textarea
				className={styles.carAddReview__textarea}
				placeholder='Оставить комментарий'
				{...register('comment', {
					required: 'Введите комментарий'
				})}
				error={errors.comment?.message}
			/>
			<Button variant='orange'>Отправить</Button>
		</form>
	)
}
