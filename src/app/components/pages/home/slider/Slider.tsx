'use client'
import cn from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { SLIDES } from './slider.data'

export function Slider() {
	const [activeSlideId, setActiveSlideId] = useState(1)

	return (
		<div className='relative'>
			{SLIDES.map(slide => (
				<div
					key={slide.id}
					className={cn(
						slide.id === activeSlideId ? 'block' : 'hidden',
						'rounded-3xl overflow-hidden'
					)}
				>
					<Image
						src={slide.image}
						alt=''
						width={1450}
						height={307}
						className='w-full'
					/>
				</div>
			))}
			<div className='absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4'>
				<button
					onClick={() =>
						setActiveSlideId(
							activeSlideId === 1 ? SLIDES.length : activeSlideId - 1
						)
					}
					className='bg-white/50 transition hover:bg-white/75 text-black font-bold p-1.5 rounded-lg'
				>
					<ChevronLeft size={20} />
				</button>

				<button
					onClick={() =>
						setActiveSlideId(
							activeSlideId === 1 ? SLIDES.length : activeSlideId - 1
						)
					}
					className='bg-white/50 transition hover:bg-white/75 text-black font-bold p-1.5 rounded-lg'
				>
					<ChevronRight size={20} />
				</button>
			</div>
		</div>
	)
}
