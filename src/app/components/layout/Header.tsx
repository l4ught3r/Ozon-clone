'use client'
import { LayoutGrid, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { headerMenu } from './header-menu.data'

export function Header() {
	return (
		<header className='flex items-center gap-4'>
			<Image
				src='/logo.png'
				alt='Ozone Logo'
				width={120}
				height={60}
			/>
			<button className='bg-primary rounded-md p-2 text-white flex items-center gap-2'>
				<LayoutGrid />
				<span>Каталог</span>
			</button>
			<div className='rounded-xl p-1 flex items-center bg-primary'>
				<input
					type='text'
					placeholder='Искать на Ozone'
					value=''
					onChange={() => {}}
					className='bg-white rounded-lg px-4 py-1.5'
				/>
				<button className='px-6'>
					<Search color='#fff' />
				</button>
			</div>
			{headerMenu.map(item => (
				<Link
					key={item.title}
					href={item.href}
				/>
			))}
		</header>
	)
}
