import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AboutPage } from './pages/About'
import { HomePage } from './pages/HomePage'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</Router>
	)
}

export default App
