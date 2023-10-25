import { FC, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { FavoriteButton } from '@/components/ui/button/favorite-button/FavoriteButton'
import { Image } from '@/components/ui/image/Image'
import { ModalCar } from '@/components/ui/modal/modal-car/ModalCar'
import { ModalCarDetails } from '@/components/ui/modal/modal-car/components/modal-car-details/ModalCarDetails'

import { TCar } from '@/service/car/car.types'

import { EnumConstantsUrl } from '@/types/constants.enum'

import { formatPrice } from '@/utils/formatPrice'

import styles from './CardCar.module.scss'

type TCardCarProps = {
	item: TCar
}
export const CardCar: FC<TCardCarProps> = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false)
	const onOpen = () => {
		setIsOpen(true)
	}
	const onClose = () => {
		setIsOpen(false)
	}
	return (
		<li className={styles.card__car}>
			<ModalCar isOpen={isOpen} onClose={onClose}>
				<ModalCarDetails id={item.id} />
			</ModalCar>
			<div className={styles.card__car_top}>
				<div className={styles.card__car_overlay}>
					<button className={styles.card__car_icon} onClick={onOpen}>
						<FaEye />
					</button>
					<Link
						to={`/${EnumConstantsUrl.CAR}/${item.slug}`}
						className={styles.card__car_link}
					>
						Подробнее
					</Link>
				</div>
				<Image src={item.images[0]} className={styles.card__car_image} />
			</div>
			<div className={styles.card__car_bottom}>
				<div className={styles.card__car_content}>
					<Link
						to={`/${EnumConstantsUrl.CAR}/${item.slug}`}
						className={styles.card__car_title}
					>
						{item.name}
					</Link>
					<span className={styles.card__car_price}>
						Цена: {formatPrice(item.price)}
					</span>
				</div>
				<FavoriteButton />
			</div>
		</li>
	)
}
