import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { Layout } from '@/components/layout/Layout'
import { CardBody } from '@/components/ui/card/card-body/CardBody'
import { Head } from '@/components/ui/head/Head'
import { ListGroup } from '@/components/ui/list-group/ListGroup'

import { useBody } from '@/hooks/body/useBody'

export const BrandSingle: FC = () => {
	const { brandSlug } = useParams()
	const { data, isLoading, isError } = useBody()

	if (isLoading) {
		return <div>Загрузка....</div>
	}

	if (isError || !data) {
		return <div>Не найдено</div>
	}

	const list = data.map(item => (
		<CardBody slug={brandSlug} key={item.id} item={item} />
	))
	return (
		<Layout>
			<Head title={`Бренд-${brandSlug?.toUpperCase()}`} />
			<ListGroup column={3}>{list}</ListGroup>
		</Layout>
	)
}
