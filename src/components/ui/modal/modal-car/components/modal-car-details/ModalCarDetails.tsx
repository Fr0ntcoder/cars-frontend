import { FC } from 'react'

import styles from './ModalCarDetails.module.scss'

export type TModalCarDetailsProps = {
	id: string
}
export const ModalCarDetails: FC<TModalCarDetailsProps> = ({ id }) => {
	return <div className={styles.details}>{id}</div>
}
