import { FC, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

import styles from './FavoriteButton.module.scss'

export const FavoriteButton: FC = () => {
	const [isExist, setIsExist] = useState(false)
	return (
		<button className={styles.favorite__btn}>
			{isExist ? <FaHeart /> : <FaRegHeart />}
		</button>
	)
}
