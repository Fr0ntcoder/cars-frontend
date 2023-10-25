import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AiFillCloseCircle } from 'react-icons/ai'

import { useOutside } from '@/hooks/other/useOutside'

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

	useOutside(modalRef, onClose)

	if (modalRoot) {
		return createPortal(
			<AnimatePresence>
				{isOpen && (
					<motion.div {...FADE} className={styles.modal}>
						<div className={styles.overlay}>
							<div className={styles.content} ref={modalRef}>
								<button className={styles.close} onClick={onClose}>
									<AiFillCloseCircle />
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
