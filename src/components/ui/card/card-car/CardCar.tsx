import { FC } from 'react'

import { Image } from '@/components/ui/image/Image'

import { TCar } from '@/service/car/car.types'

import styles from './CardCar.module.scss'

type TCardCarProps = {
	item: TCar
}
export const CardCar: FC<TCardCarProps> = ({ item }) => {
	return (
		<li className={styles.card}>
			<Image src={item.images[0]} className={styles.img} />
		</li>
	)
}
