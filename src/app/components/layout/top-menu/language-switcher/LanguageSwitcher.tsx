'use client'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useMemo } from 'react'
import { LANGUAGES } from './languages.data'

export function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()
	const locale = useLocale()

	const toggleHandler = () => {
		const newLanguage = locale === 'ru' ? 'en' : 'ru'
		router.replace(pathname, { locale: newLanguage })
		router.refresh()
	}

	const language = useMemo(() => {
		return LANGUAGES.find(lang => lang.code === locale)
	}, [locale])

	if (!language) return null

	return (
		<button
			className='flex items-center gap-1.5 group w-12'
			onClick={toggleHandler}
		>
			<Image
				src={language.flag}
				alt={`${language.code} flag`}
				width={24}
				height={24}
				className='group-hover:rotate-6 transition-transform duration-300'
			/>

			<span className='uppercase font-medium opacity-50 transition-opacity group-hover:opacity-100'>
				{language?.code}
			</span>
		</button>
	)
}
