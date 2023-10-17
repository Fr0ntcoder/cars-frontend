import clsx from 'clsx'
import { FC } from 'react'

import { useProfile } from '@/hooks/profile/useProfile'

import styles from './HeaderUser.module.scss'

type THeaderUserProps = {
	className?: string
}

export const HeaderUser: FC<THeaderUserProps> = ({ className }) => {
	const { data } = useProfile()

	return (
		<div className={styles.root}>
			<div>
				<span className={clsx(styles.avatar, className)}>
					<img src={data?.avatarPath} alt='' />
				</span>
				<div className={styles.name}>{data?.name}</div>
			</div>
		</div>
	)
}
