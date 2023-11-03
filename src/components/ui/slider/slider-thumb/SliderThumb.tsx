import clsx from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import SwiperCore, { Swiper as SwiperClass } from 'swiper'
import { Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import styles from './SliderThumb.module.scss'

SwiperCore.use([Thumbs, Navigation])

type TSliderThumbProps = {
	images: string[]
	className?: string
}
export const SliderThumb: FC<TSliderThumbProps> = ({ images, className }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
	const [activeIndex, setActiveIndex] = useState(0)

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
		const nextButton = document.querySelector(`.${styles.next}`)
		const prevButton = document.querySelector(`.${styles.prev}`)

		nextButton?.addEventListener('click', goNext)
		prevButton?.addEventListener('click', goPrev)

		return () => {
			nextButton?.removeEventListener('click', goNext)
			prevButton?.removeEventListener('click', goPrev)
		}
	}, [])
	const slides = images.map((item, i) => (
		<SwiperSlide key={i}>
			<div className={styles.slider__img}>
				<img src={item} />
			</div>
		</SwiperSlide>
	))

	const thumbs = images.map((item, i) => (
		<SwiperSlide key={i}>
			<div className={styles.thumb__img}>
				<img src={item} />
			</div>
		</SwiperSlide>
	))
	return (
		<div className={clsx(styles.sliderThumb, className)}>
			<div className={styles.slider}>
				<Swiper
					thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
					tag='section'
					wrapperTag='div'
					spaceBetween={0}
					slidesPerView={1}
					onSwiper={swiper => {
						swiperRef.current = swiper
					}}
					onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
				>
					{slides}
				</Swiper>

				<button
					className={clsx(styles.prev, {
						[styles.disabled]: activeIndex === 0
					})}
				>
					<FaAngleLeft />
				</button>
				<button
					className={clsx(styles.next, {
						[styles.disabled]: activeIndex === images.length - 1
					})}
				>
					<FaAngleRight />
				</button>
			</div>
			<div className={styles.thumb}>
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={5}
					slidesPerView={5}
					freeMode={true}
					watchSlidesProgress={true}
				>
					{thumbs}
				</Swiper>
			</div>
		</div>
	)
}
