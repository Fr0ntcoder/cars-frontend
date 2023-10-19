import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './ListGroup.module.scss'

type TListGroupProps = {
	className?: string
	children: ReactNode
	column: 2 | 3 | 4 | 5
}
export const ListGroup: FC<TListGroupProps> = ({
	className,
	children,
	column
}) => {
	return (
		<ul
			className={clsx(styles.list, className, {
				[styles.column__2]: column === 2,
				[styles.column__3]: column === 3,
				[styles.column__4]: column === 4,
				[styles.column__5]: column === 5
			})}
		>
			{children}
		</ul>
	)
}
