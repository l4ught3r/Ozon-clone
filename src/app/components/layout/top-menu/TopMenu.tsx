import cn from 'clsx'
import { Dot } from 'lucide-react'
import Link from 'next/link'
import { LanguageSwitcher } from '../language-swticher/LanguageSwitcher'
import { topMenu } from './top-menu.data'

export function TopMenu() {
	return (
		<div className='flex justify-between items-center mt-6 mx-5'>
			<nav className='flex gap-6 items-center'>
				{topMenu.map((menuItem, index) => (
					<Link
						key={menuItem.title}
						href={menuItem.href}
						className={cn(
							'flex gap-1 items-center transition-opacity hover:opacity-100 opacity-50 font-medium',
							index === 0 && 'opacity-100 text-teal-600'
						)}
					>
						{menuItem.icon && (
							<menuItem.icon
								size={16}
								style={{ marginRight: 4 }}
							/>
						)}
						<span>{menuItem.title}</span>
					</Link>
				))}
			</nav>

			<div className='flex items-center gap-4'>
				<div className='font-medium flex items-center text-sm'>
					<span className='opacity-50'></span>
					Москва <Dot className='opacity-50' />
					<button className='text-primary font-semibold'>Укажите адрес</button>
				</div>
				<div>
					<LanguageSwitcher />
				</div>
			</div>
		</div>
	)
}
