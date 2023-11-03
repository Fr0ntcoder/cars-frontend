import { FC, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { FavoriteButton } from '@/components/ui/button/favorite-button/FavoriteButton'
import { Image } from '@/components/ui/image/Image'
import { ModalCar } from '@/components/ui/modal/modal-car/ModalCar'
import { ModalCarDetails } from '@/components/ui/modal/modal-car/components/modal-car-details/ModalCarDetails'

import { TCar } from '@/service/car/car.types'

import { EnumConstantsRoutes } from '@/types/constants.enum'

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
		<li className={styles.root}>
			<ModalCar isOpen={isOpen} onClose={onClose}>
				<ModalCarDetails id={item.id} />
			</ModalCar>
			<div className={styles.top}>
				<div className={styles.overlay}>
					<button className={styles.icon} onClick={onOpen}>
						<FaEye />
					</button>
					<Link
						to={`${EnumConstantsRoutes.CAR}/by-slug/${item.slug}`}
						className={styles.link}
					>
						Подробнее
					</Link>
				</div>
				<Image src={item.images[0]} className={styles.image} />
			</div>
			<div className={styles.bottom}>
				<div className={styles.content}>
					<Link
						to={`${EnumConstantsRoutes.CAR}/by-slug/${item.slug}`}
						className={styles.title}
					>
						{item.name}
					</Link>
					<span className={styles.price}>Цена: {formatPrice(item.price)}</span>
				</div>
				<FavoriteButton carId={item.id} />
			</div>
		</li>
	)
}
