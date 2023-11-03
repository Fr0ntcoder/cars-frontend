import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { CarAddReview } from '@/components/screens/car/components/car-add-review/CarAddReview'
import { CarDetails } from '@/components/screens/car/components/car-details/CarDetails'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { Head } from '@/components/ui/head/Head'
import { Loader } from '@/components/ui/loader/Loader'
import { SliderReview } from '@/components/ui/slider/slider-review/SliderReview'
import { SliderThumb } from '@/components/ui/slider/slider-thumb/SliderThumb'

import { useCarBySlug } from '@/hooks/car/useCarBySlug'

import { textUpperCase } from '@/utils/textFormat'

import styles from './Car.module.scss'

export const Car: FC = () => {
	const { slug } = useParams()
	const { data, isLoading, isError } = useCarBySlug(slug)

	if (isLoading) {
		return <Loader />
	}

	if (isError || !data) {
		return <ErrorMessage />
	}

	return (
		<>
			<Head title={textUpperCase(data.name)} />
			<div className={styles.car}>
				<SliderThumb images={data.images} className={styles.car__thumb} />
				<CarDetails data={data} className={styles.car__details} />
				<SliderReview data={data.reviews} className={styles.car__reviews} />
				<CarAddReview id={data.id} />
			</div>
		</>
	)
}
