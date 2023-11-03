import clsx from 'clsx'
import { FC } from 'react'
import {
	FaBolt,
	FaCalendar,
	FaCarAlt,
	FaCarSide,
	FaChartBar,
	FaCity,
	FaCogs,
	FaGasPump
} from 'react-icons/fa'

import { Title } from '@/components/ui/title/Title'

import { TCar } from '@/service/car/car.types'

import styles from './CarDetails.module.scss'

type TCarDetailsProps = {
	data: TCar
	className?: string
}

export const CarDetails: FC<TCarDetailsProps> = ({ data, className }) => {
	return (
		<div className={clsx(styles.carDetails, className)}>
			<Title el='h4' title={data.name} className={styles.carDetails__title} />
			<p className={styles.carDetails__description}>{data.description}</p>
			<ul className={styles.carDetails__list}>
				<div className={styles.carDetails__item}>
					<div className={styles.carDetails__item_top}>
						<FaCalendar />
						<span>Год </span>
					</div>
					<div className={styles.carDetails__item_text}>{data.year}</div>
				</div>
				<div className={styles.carDetails__item}>
					<div className={styles.carDetails__item_top}>
						<FaChartBar />
						<span>Объем </span>
					</div>
					<div className={styles.carDetails__item_text}>
						{data.volume.toFixed(1)}
					</div>
				</div>
				<div className={styles.carDetails__item}>
					<div className={styles.carDetails__item_top}>
						<FaBolt />
						<span>Мощность </span>
					</div>
					<div className={styles.carDetails__item_text}>{data.power} л.с</div>
				</div>
				<div className={styles.carDetails__item}>
					<div className={styles.carDetails__item_top}>
						<FaCogs />
						<span>Коробка </span>
					</div>
					<div className={styles.carDetails__item_text}>{data.box}</div>
				</div>
				<div className={styles.carDetails__item}>
					<div className={styles.carDetails__item_top}>
						<FaGasPump />
						<span>Тип двигателя </span>
					</div>
					<div className={styles.carDetails__item_text}>{data.engine}</div>
				</div>
				<div className={styles.carDetails__item}>
					<div className={styles.carDetails__item_top}>
						<FaCarAlt />
						<span>Привод </span>
					</div>
					<div className={styles.carDetails__item_text}>{data.drive}</div>
				</div>
				<div className={styles.carDetails__item}>
					<div className={styles.carDetails__item_top}>
						<FaCity />
						<span>Страна марки </span>
					</div>
					<div className={styles.carDetails__item_text}>{data.city}</div>
				</div>
				<div className={styles.carDetails__item}>
					<div className={styles.carDetails__item_top}>
						<FaCarSide />
						<span>Класс автомобиля </span>
					</div>
					<div className={styles.carDetails__item_text}>{data.class}</div>
				</div>
			</ul>
		</div>
	)
}
