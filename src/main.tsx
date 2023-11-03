import App from 'App'
import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store/store'

moment.locale('ru')

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

/* queryClient.invalidateQueries({
	queryKey: ['carBrandBody', 'brandBySlug', 'brand']
}) */

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<HelmetProvider>
						<App />
					</HelmetProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>
)
