import clsx from 'clsx'
import { FC } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import { useGeolocation } from '@/hooks/other/useGeolocation'

import styles from './GeoLocation.module.scss'

type TLocationProps = {
	className?: string
}
export const GeoLocation: FC<TLocationProps> = ({ className }) => {
	const { city } = useGeolocation()
	return (
		<div className={clsx(styles.location, className)}>
			<FaMapMarkerAlt />
			<span>{city}</span>
		</div>
	)
}
