import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { CardBody } from '@/components/ui/card/card-body/CardBody'
import { Head } from '@/components/ui/head/Head'
import { ListGroup } from '@/components/ui/list-group/ListGroup'
import { Loader } from '@/components/ui/loader/Loader'
import { NotFound } from '@/components/ui/not-found/NotFound'

import { useBody } from '@/hooks/body/useBody'

import { textUpperCase } from '@/utils/textFormat'

export const Brand: FC = () => {
	const { brandSlug } = useParams()
	const { data, isLoading, isError } = useBody()

	if (isLoading) {
		return <Loader />
	}

	if (isError || !data) {
		return <div>Ошибка...</div>
	}

	if (data.length === 0) {
		return <NotFound />
	}

	const list = data.map(item => (
		<CardBody slug={brandSlug} key={item.id} item={item} />
	))

	return (
		<>
			<Head title={`Бренд-${textUpperCase(brandSlug)}`} />
			<ListGroup column={3}>{list}</ListGroup>
		</>
	)
}
