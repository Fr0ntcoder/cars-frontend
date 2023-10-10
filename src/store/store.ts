import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userSlice } from './user/user.slice'

/* const baseQuery = fetchBaseQuery({
	baseUrl: process.env.SERVER_URL
})

export const api = createApi({
	baseQuery,
	reducerPath: 'api',
	endpoints: builder => ({})
})
 */
const persistConfig = {
	key: 'car-frontend',
	storage,
	whitelist: ['']
}

const rootReducer = combineReducers({
	user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
