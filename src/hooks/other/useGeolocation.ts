import axios from 'axios'
import { useEffect, useState } from 'react'

export const useGeolocation = () => {
	const [city, setCity] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		// Замените 'YOUR_YANDEX_API_KEY' на ваш собственный ключ
		const apiKey = 'a1514263-da32-4303-a816-3f3d4b36fbd7'

		// Получите координаты пользователя через браузерный API
		navigator.geolocation.getCurrentPosition(
			async position => {
				const { latitude, longitude } = position.coords
				console.log(latitude, longitude)
				axios
					.get(
						`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${longitude},${latitude}&format=json`
					)
					.then(response => {
						const data =
							response.data.response.GeoObjectCollection.featureMember[0]
								.GeoObject
						const cityName = data.name
						setCity(cityName)
					})
					.catch(error => {
						console.error('Error getting city:', error)
					})
			},
			error => {
				/* setError('Ошибка при получении геолокации.'); */
			}
		)
	}, [])

	return { city, error }
}
