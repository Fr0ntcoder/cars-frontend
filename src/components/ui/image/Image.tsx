import clsx from 'clsx'
import { FC } from 'react'

import styles from './Image.module.scss'

type TImageProps = {
	src: string
	className?: string
}
export const Image: FC<TImageProps> = ({ src, className }) => {
	return (
		<div className={clsx(styles.img, className)}>
			<img src={src} alt='' />
		</div>
	)
}
