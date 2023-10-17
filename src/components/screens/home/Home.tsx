import { FC } from 'react'

import { Layout } from '@/components/layout/Layout'
import { Head } from '@/components/ui/head/Head'

export const Home: FC = () => {
	return (
		<Layout>
			<Head title='Главная' />
		</Layout>
	)
}
