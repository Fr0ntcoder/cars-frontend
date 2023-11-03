import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { MainLayout } from '@/components/layout/main-layout/MainLayout'
import { ProfileLayout } from '@/components/layout/profile-layout/ProfileLayout'

import { EnumConstantsRoutes } from '@/types/constants.enum'

import { AuthPage } from '@/pages/AuthPage'
import { BodyPage } from '@/pages/BodyPage'
import { BrandPage } from '@/pages/BrandPage'
import { CarPage } from '@/pages/CarPage'
import { CommentsPage } from '@/pages/CommentsPage'
import { FavoritesPage } from '@/pages/FavoritesPage'
import { HomePage } from '@/pages/HomePage'
import { ProfilePage } from '@/pages/ProfilePage'

export const Routing = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<HomePage />} />
					<Route
						path={`${EnumConstantsRoutes.BRAND}/:brandSlug`}
						element={<BrandPage />}
					/>
					<Route
						path={`${EnumConstantsRoutes.CAR}/:brandSlug/:categorySlug`}
						element={<BodyPage />}
					/>
					<Route
						path={`${EnumConstantsRoutes.CAR}/by-slug/:slug`}
						element={<CarPage />}
					/>
				</Route>
				<Route path={EnumConstantsRoutes.PROFILE} element={<ProfileLayout />}>
					<Route path='' element={<ProfilePage />} />
					<Route
						path={EnumConstantsRoutes.PROFILE_COMMENTS}
						element={<CommentsPage />}
					/>
					<Route
						path={EnumConstantsRoutes.PROFILE_FAVORITES}
						element={<FavoritesPage />}
					/>
				</Route>
				<Route path='/auth' element={<AuthPage />} />
			</Routes>
		</Router>
	)
}
