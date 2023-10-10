import { createAsyncThunk } from '@reduxjs/toolkit'

import { errorCatch } from '../../api/api.helper'
import { removeFromStorage } from '../../service/auth/auth.helper'
import { AuthService } from '../../service/auth/auth.service'
import { EnumConstants } from '../../types/constants.enum'

import { IAuthResponse, IEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	`${EnumConstants.AUTH}/register`,
	async (data, thunkAPI) => {
		try {
			const response = await AuthService.main('register', data)

			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	`${EnumConstants.AUTH}/login`,
	async (data, thunkAPI) => {
		try {
			const response = await AuthService.main('login', data)

			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk(
	`${EnumConstants.AUTH}/logout`,
	async () => {
		removeFromStorage()
	}
)

export const checkAuth = createAsyncThunk<IAuthResponse>(
	`${EnumConstants.AUTH}/check-auth`,
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewTokens()

			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkAPI.dispatch(logout())
			}

			return thunkAPI.rejectWithValue(error)
		}
	}
)
