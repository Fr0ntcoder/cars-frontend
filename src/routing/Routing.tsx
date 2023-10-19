import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AuthPage } from '@/pages/AuthPage'
import { BodySinglePage } from '@/pages/BodySinglePage'
import { BrandSinglePage } from '@/pages/BrandSInglePage'
import { HomePage } from '@/pages/HomePage'

export const Routing = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/brand/:brandSlug' element={<BrandSinglePage />} />
				<Route
					path='/car/:brandSlug/:categorySlug'
					element={<BodySinglePage />}
				/>
				<Route path='/auth' element={<AuthPage />} />
			</Routes>
		</Router>
	)
}
