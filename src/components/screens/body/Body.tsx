import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { CardCar } from '@/components/ui/card/card-car/CardCar'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { Head } from '@/components/ui/head/Head'
import { ListGroup } from '@/components/ui/list-group/ListGroup'
import { Loader } from '@/components/ui/loader/Loader'
import { NotFound } from '@/components/ui/not-found/NotFound'

import { useCarsBody } from '@/hooks/car/useCarsBody'

import { textUpperCase } from '@/utils/textFormat'

export const Body: FC = () => {
	const { brandSlug, categorySlug } = useParams()
	const { data, isLoading, isError } = useCarsBody(brandSlug, categorySlug)

	if (isLoading) {
		return <Loader />
	}

	if (isError || !data) {
		return <ErrorMessage />
	}

	if (data.length === 0) {
		return <NotFound />
	}

	const list = data.map(item => <CardCar key={item.id} item={item} />)

	return (
		<>
			<Head
				title={`Бренд-${textUpperCase(brandSlug)}-${textUpperCase(
					categorySlug
				)}`}
			/>
			<ListGroup column={3}>{list}</ListGroup>
		</>
	)
}
