import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'
import { FaRegUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useActions } from '@/hooks/other/useActions'
import { useOutside } from '@/hooks/other/useOuside'
import { useProfile } from '@/hooks/profile/useProfile'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import { FADE } from '@/utils/animation/fade'

import styles from './HeaderUser.module.scss'

type THeaderUserProps = {
	className?: string
}

export const HeaderUser: FC<THeaderUserProps> = ({ className }) => {
	const { ref, isShow, setIsShow } = useOutside(false)
	const { logout } = useActions()
	const { data, isLoading, isError } = useProfile()

	if (isLoading) {
		return <span className={styles.loader}>Загрузка...</span>
	}

	if (isError || !data) {
		return <span className={styles.error}>Ошибка...</span>
	}

	return (
		<div className={styles.headerUser} ref={ref}>
			<div
				className={styles.headerUser__info}
				onClick={() => setIsShow(!isShow)}
			>
				<span className={clsx(styles.headerUser__avatar, className)}>
					<img src={data?.avatarPath} alt='' />
				</span>
				<div className={styles.headerUser__name}>{data?.name}</div>
			</div>
			<AnimatePresence>
				{isShow && (
					<motion.div {...FADE} className={styles.headerUser__drop}>
						<ul className={styles.headerUser__list}>
							<li className={styles.headerUser__item}>
								<FaRegUserCircle />
								<Link to={EnumConstantsRoutes.PROFILE}>Мой профиль</Link>
							</li>
							<li className={styles.headerUser__item}>
								<FaSignOutAlt />
								<span onClick={logout}>Выйти</span>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
