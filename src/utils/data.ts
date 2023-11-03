import Audi from '@/assets/images/brand/audi.png'
import Bwm from '@/assets/images/brand/bmw.png'
import Geely from '@/assets/images/brand/geely.png'
import Kia from '@/assets/images/brand/kia.png'
import Lada from '@/assets/images/brand/lada.png'
import Mb from '@/assets/images/brand/mersedes.png'
import Voyah from '@/assets/images/brand/voyah.png'
import Cabriolet from '@/assets/images/type/cabriolet.png'
import Coupe from '@/assets/images/type/coupe.png'
import Hatchback from '@/assets/images/type/hatchback.png'
import Liftback from '@/assets/images/type/liftback.png'
import Sedan from '@/assets/images/type/sedan.png'
import Suv from '@/assets/images/type/suv.png'
import Wagon from '@/assets/images/type/wagon.png'

type TCardBrandImage = {
	id: string
	img: string
}

export const dataBrand: TCardBrandImage[] = [
	{
		id: '35dbf626-549a-43bf-8fd6-5d2c9cde9bfe',
		img: Audi
	},
	{
		id: '25af1154-a35a-4320-8673-5814558e5ca4',
		img: Bwm
	},
	{
		id: '29344b8c-d2c5-471f-adfe-10db6a301e2f',
		img: Geely
	},
	{
		id: 'ac9a3a2c-e87c-4bde-a1c9-e60681cf60a8',
		img: Kia
	},
	{
		id: 'bb925e6f-9b9e-4a1f-993f-a25583f85eca',
		img: Lada
	},
	{
		id: 'd0a053db-78ed-4a31-9c87-4a23294967cd',
		img: Mb
	},
	{
		id: '331efd73-7240-4814-bdea-40af4559b741',
		img: Voyah
	}
]

export const dataBody: TCardBrandImage[] = [
	{
		id: '68941b86-e485-4ee8-b121-e6853ee9f3d7',
		img: Cabriolet
	},
	{
		id: 'c76577b1-3ebe-4386-81e1-6fc45aa7a7fa',
		img: Coupe
	},
	{
		id: '2bad436f-56ed-481e-9d1d-12f90925f6a5',
		img: Liftback
	},
	{
		id: 'cc413961-3101-4b00-b35f-c7e0471d80cb',
		img: Hatchback
	},
	{
		id: '0e1c57ce-f02e-41c7-ae94-e4c2fb84ef30',
		img: Sedan
	},
	{
		id: '242f0da2-84c6-4413-ac6c-dbdcc433f5e5',
		img: Suv
	},
	{
		id: 'edb3a214-0a8f-4fe3-bac0-4484410bdfe3',
		img: Wagon
	}
]
