import clsx from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'
import SwiperCore, { Swiper as SwiperClass } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { CardReview } from '@/components/ui/card/card-review/CardReview'
import { Title } from '@/components/ui/title/Title'

import { IReview } from '@/service/review/review.interface'

import styles from './SliderReview.module.scss'

SwiperCore.use([Navigation])
type TSliderProps = {
	data: IReview[]
	className?: string
}
export const SliderReview: FC<TSliderProps> = ({ data, className }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [slidesCount, setSlidesCount] = useState(3)
	const swiperRef = useRef<SwiperClass | null>(null)

	useEffect(() => {
		const swiperInstance = swiperRef.current

		const goNext = () => {
			swiperInstance?.slideNext()
			setActiveIndex(
				swiperInstance?.activeIndex ? swiperInstance?.activeIndex : 0
			)
		}

		const goPrev = () => {
			swiperInstance?.slidePrev()
			setActiveIndex(
				swiperInstance?.activeIndex ? swiperInstance?.activeIndex : 0
			)
		}
		const nextButton = document.querySelector(`.${styles.gallery__slider_next}`)
		const prevButton = document.querySelector(`.${styles.gallery__slider_prev}`)

		nextButton?.addEventListener('click', goNext)
		prevButton?.addEventListener('click', goPrev)

		return () => {
			nextButton?.removeEventListener('click', goNext)
			prevButton?.removeEventListener('click', goPrev)
		}
	}, [])

	const pagination = {
		el: `.${styles.sliderReview__pagination}`,
		clickable: true,
		renderBullet: function (index: any, className: any) {
			return '<span class="' + className + '">' + '</span>'
		}
	}
	const slides = data.map((item, i) => (
		<SwiperSlide key={i}>
			<CardReview item={item} />
		</SwiperSlide>
	))

	if (data.length === 0) {
		return <span className={styles.sliderReview__empty}>Нет отзывов</span>
	}
	console.log(data)
	return (
		<div className={clsx(styles.sliderReview, className)}>
			<Title el='h3' title='Отзывы' className={styles.sliderReview__title} />
			<Swiper
				tag='section'
				wrapperTag='div'
				spaceBetween={15}
				slidesPerView={slidesCount}
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
				pagination={pagination}
				modules={[Pagination]}
				onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
			>
				{slides}
			</Swiper>
			<div className={styles.sliderReview__pagination}></div>
		</div>
	)
}
