import moment from 'moment'

moment.defineLocale('ru', {
	months: {
		format:
			'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
				'_'
			),
		standalone:
			'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
				'_'
			)
	},
	monthsShort: [
		'янв',
		'фев',
		'мар',
		'апр',
		'май',
		'июн',
		'июл',
		'авг',
		'сен',
		'окт',
		'ноя',
		'дек'
	],
	weekdays: [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'
	],
	weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	weekdaysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	longDateFormat: {
		LT: 'HH:mm',
		LTS: 'HH:mm:ss',
		L: 'DD.MM.YYYY',
		LL: 'D MMMM YYYY г.',
		LLL: 'D MMMM YYYY г., HH:mm',
		LLLL: 'dddd, D MMMM YYYY г., HH:mm'
	},
	relativeTime: {
		future: 'через %s',
		past: '%s назад',
		s: 'несколько секунд',
		m: 'минута',
		mm: '%d минут(ы)',
		h: 'час',
		hh: '%d час(а, ов)',
		d: 'день',
		dd: '%d день(ей)',
		M: 'месяц',
		MM: '%d месяц(ев)',
		y: 'год',
		yy: '%d год(а, ов)'
	},
	meridiem: (hour: number, minute: number, isLowercase: boolean) => {
		if (hour < 12) {
			return 'AM'
		} else {
			return 'PM'
		}
	},
	calendar: {
		sameDay: '[Сегодня,] LT',
		nextDay: '[Завтра,] LT',
		nextWeek: 'dddd, LT',
		lastDay: '[Вчера,] LT',
		lastWeek: '[Последний] dddd, LT',
		sameElse: 'L'
	}
})

moment.locale('ru')
export default moment
