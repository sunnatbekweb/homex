'use client'

import { Link } from '@/config/i18n/routing'
import { useGetHeroVideo } from '@/hooks/api.query'
import { MoveRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Hero = () => {
	const t = useTranslations()
	const { data } = useGetHeroVideo()

	return (
		<section
			id="home"
			className="hero h-screen relative"
		>
			<video
				poster={data?.poster}
				src={data?.video}
				controls={false}
				autoPlay
				muted
				loop
				playsInline
				className="absolute w-full h-full object-cover top-0 left-0 -z-2"
			></video>
			<div className="absolute top-0 left-0 w-full h-full bg-black/30 -z-1"></div>
			<div className="max-w-210 px-4 mx-auto mt-[15%]">
				<h2 className="font-semibold text-5xl md:text-[72px] leading-none text-center mb-7.5">
					{t('hero.title')}
				</h2>
				<p className="leading-normal text-center mx-[10%] mb-12.5">
					{t('hero.text')}
				</p>
				<div className="flex justify-center gap-5 mb-20.5 font-medium">
					<Link href={'#contact'}>
						<button className="h-13 flex items-center gap-2.5 px-6 rounded-4xl bg-[#8D8D8D99] text-sm md:text-xl text-white">
							{t('hero.button1')} <MoveRight />
						</button>
					</Link>
					<Link href={'#services'}>
						<button className="h-13 px-6 rounded-4xl bg-white text-sm md:text-xl text-black">
							{t('hero.button2')}
						</button>
					</Link>
				</div>
				<div className="flex justify-center gap-3.75">
					<div className="flex items-center">
						{[...Array(5)].map((_, index) => (
							<Image
								key={index}
								src={`/images/trusted_client${index}.jpg`}
								width={36}
								height={36}
								alt="Avatar"
								className="rounded-full w-7 aspect-square md:w9 -mr-1.5"
							/>
						))}
					</div>
					<p className="font-medium text-sm md:text-base">
						{t('hero.bottom_text')} 500+
					</p>
				</div>
			</div>
			<div className="bottom_gradient"></div>
		</section>
	)
}
