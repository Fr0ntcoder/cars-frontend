import { FC } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useMutation, useQueryClient } from 'react-query'

import { UserService } from '@/service/user/user.service'

import { useProfile } from '@/hooks/profile/useProfile'

import styles from './FavoriteButton.module.scss'

type TFavoriteButtonProps = {
	carId: string
}
export const FavoriteButton: FC<TFavoriteButtonProps> = ({ carId }) => {
	const { profile } = useProfile()
	const queryClient = useQueryClient()
	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserService.toogleFavorite(carId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	if (!profile) return null

	const isExist = profile.favorites.some(favorite => favorite.id === carId)
	return (
		<button onClick={() => mutate()} className={styles.root}>
			{isExist ? <FaHeart /> : <FaRegHeart />}
		</button>
	)
}
