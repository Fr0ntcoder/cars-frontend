import { FC } from 'react'

import { CommentsCard } from '@/components/screens/comments/components/comments-card/CommentsCard'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { Head } from '@/components/ui/head/Head'
import { ListGroup } from '@/components/ui/list-group/ListGroup'
import { Loader } from '@/components/ui/loader/Loader'
import { NotFound } from '@/components/ui/not-found/NotFound'
import { Title } from '@/components/ui/title/Title'

import { useProfile } from '@/hooks/profile/useProfile'

import styles from './Comments.module.scss'

export const Comments: FC = () => {
	const { data, isLoading, isError } = useProfile()

	if (isLoading) {
		return <Loader />
	}

	if (isError || !data) {
		return <ErrorMessage />
	}

	if (data.favorites.length === 0) {
		return <NotFound />
	}

	const list = data.reviews.map(item => (
		<CommentsCard key={item.id} item={item} />
	))

	console.log(data)
	return (
		<>
			<Head title='Мой комментарии' />
			<div className={styles.comments}>
				<Title
					el='h4'
					title='Мои комментарии'
					className={styles.comments__title}
				/>
				<ListGroup column={3}>{list}</ListGroup>
			</div>
		</>
	)
}
