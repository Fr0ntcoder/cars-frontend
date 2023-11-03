import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FaCircleXmark } from 'react-icons/fa6'

import { useOutsidePortal } from '@/hooks/other/useOutsidePortal'

import { FADE } from '@/utils/animation/fade'

import styles from './ModalCar.module.scss'

const modalRoot = document.getElementById('root')

type TModalCarProps = {
	children: ReactNode
	isOpen: boolean
	onClose: () => void
}

export const ModalCar: FC<TModalCarProps> = ({ isOpen, children, onClose }) => {
	const modalRef = useRef<HTMLDivElement | null>(null)

	useOutsidePortal(modalRef, onClose)

	if (modalRoot) {
		return createPortal(
			<AnimatePresence>
				{isOpen && (
					<motion.div {...FADE} className={styles.root}>
						<div className={styles.overlay}>
							<div className={styles.content} ref={modalRef}>
								<button className={styles.close} onClick={onClose}>
									<FaCircleXmark />
								</button>
								{children}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>,
			modalRoot
		)
	}
}
