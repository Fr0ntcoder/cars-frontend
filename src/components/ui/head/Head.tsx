import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

type THead = {
	title: string
}

export const Head: FC<THead> = ({ title }) => {
	return (
		<Helmet>
			<meta charSet='utf-8' />
			<title>{title}</title>
			<link rel='canonical' href='http://mysite.com/example' />
		</Helmet>
	)
}
