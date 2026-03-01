'use client'
import { useMemo, useState } from 'react'
import { LANGUAGES } from './languages.data'

export function LanguageSwitcher() {
	const [currentLanguage, setCurrentLanguage] = useState<'ru' | 'en'>('ru')

	const language = useMemo(() => {
		return LANGUAGES.find(lang => lang.code === currentLanguage)
	}, [currentLanguage])

	return (
		<button
			className='flex items-center gap-1.5 group'
			onClick={() => setCurrentLanguage(prev => (prev === 'ru' ? 'en' : 'ru'))}
		>
			<span className='text-lg group-hover:rotate-6 transition-transform'>
				{language?.flag}
			</span>

			<span className='uppercase font-medium opacity-50 transition-opacity group-hover:opacity-100'>
				{language?.code}
			</span>
		</button>
	)
}
