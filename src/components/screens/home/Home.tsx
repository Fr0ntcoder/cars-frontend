import { FC } from 'react'

import { Layout } from '@/components/layout/Layout'
import { CardBrand } from '@/components/ui/card/card-brand/CardBrand'
import { Head } from '@/components/ui/head/Head'
import { ListGroup } from '@/components/ui/list-group/ListGroup'

import { useBrand } from '@/hooks/brand/useBrand'

export const Home: FC = () => {
	const { data, isLoading, isError } = useBrand()

	if (isLoading) {
		return <div>Загрузка....</div>
	}

	if (isError || !data) {
		return <div>Не найдено</div>
	}

	const list = data.map(item => <CardBrand key={item.id} item={item} />)

	return (
		<Layout>
			<Head title='Главная' />
			<ListGroup column={3}>{list}</ListGroup>
		</Layout>
	)
}
