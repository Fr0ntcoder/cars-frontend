import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Layout } from '@/components/layout/Layout'

import { EnumConstantsUrl } from '@/types/constants.enum'

import { AuthPage } from '@/pages/AuthPage'
import { BodyPage } from '@/pages/BodyPage'
import { BrandPage } from '@/pages/BrandPage'
import { CarPage } from '@/pages/CarPage'
import { HomePage } from '@/pages/HomePage'

export const Routing = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='' element={<HomePage />} />
					<Route
						path={`${EnumConstantsUrl.BRAND}/:brandSlug`}
						element={<BrandPage />}
					/>
					<Route
						path={`${EnumConstantsUrl.CAR}/:brandSlug/:categorySlug`}
						element={<BodyPage />}
					/>
					<Route
						path={`${EnumConstantsUrl.CAR}/:carSlug`}
						element={<CarPage />}
					/>
				</Route>
				<Route path='/auth' element={<AuthPage />} />
			</Routes>
		</Router>
	)
}
