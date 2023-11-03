import { FC } from 'react'

import { SidebarMenu } from '@/components/layout/components/sidebar/components/sidebar-menu/SidebarMenu'

import styles from './Sidebar.module.scss'

export const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<SidebarMenu />
		</div>
	)
}
