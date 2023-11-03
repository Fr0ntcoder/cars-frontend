import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { FaComment, FaRegHeart, FaUserAlt } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import styles from './SidebarMenu.module.scss'

type TSidebarMenuItem = {
	id: number
	text: string
	link: string
	icons: ReactNode
}

const data: TSidebarMenuItem[] = [
	{
		id: 1,
		text: 'Мой профиль',
		link: EnumConstantsRoutes.PROFILE,
		icons: <FaUserAlt />
	},
	{
		id: 2,
		text: 'Избранное',
		link: EnumConstantsRoutes.PROFILE_FAVORITES,
		icons: <FaRegHeart />
	},
	{
		id: 3,
		text: 'Мои комментарии',
		link: EnumConstantsRoutes.PROFILE_COMMENTS,
		icons: <FaComment />
	}
]

export const SidebarMenu: FC = () => {
	const { pathname } = useLocation()
	console.log(pathname)
	const list = data.map(item => (
		<li
			className={clsx(styles.sidebarMenu__item, {
				[styles.active]: pathname === item.link
			})}
			key={item.id}
		>
			<Link to={item.link}>
				{item.icons}
				{item.text}
			</Link>
		</li>
	))
	return <ul className={styles.sidebarMenu}>{list}</ul>
}
