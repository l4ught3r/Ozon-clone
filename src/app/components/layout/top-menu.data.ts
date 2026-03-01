import { PagesConfig } from '@/config/pages.config'
import { Banana, BriefcaseBusiness, CreditCard, Plane } from 'lucide-react'

//// fresh, ozon карт, авиа-билеты, для бизнеса, одежда, электроника, дом и сад, товары за 1Р, сертификаты
export const topMenu = [
	{
		title: 'Ozon fresh',
		icon: Banana,
		href: PagesConfig.FRESH
	},
	{
		title: 'Ozon Карта',
		icon: CreditCard,
		href: PagesConfig.OZON_CARD
	},
	{
		title: 'Авиа-билеты',
		icon: Plane,
		href: PagesConfig.AIR_TICKETS
	},
	{
		title: 'Для бизнеса',
		icon: BriefcaseBusiness,
		href: PagesConfig.FOR_BUSINESS
	},
	{
		title: 'Одежда',
		href: PagesConfig.CLOTHING
	},
	{ title: 'Электроника', href: PagesConfig.ELECTRONICS },
	{ title: 'Дом и сад', href: PagesConfig.HOME_AND_GARDEN },
	{ title: 'Товары за 1Р', href: PagesConfig.PRODUCTS_FOR_1_RUB },
	{ title: 'Сертификаты', href: PagesConfig.CERTIFICATES }
]
