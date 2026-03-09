'use client'

import { NavDrawer } from '@/components/ui/drawer/NavDrawer'
import { Nav } from '@/components/ui/nav'
import { Link, usePathname } from '@/config/i18n/routing'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { Menu, X } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import styles from './style.module.scss'

export const Header = () => {
	const [drawer, setDrawer] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const locale = useLocale()
	const pathname = usePathname()
	const scrollY = useScrollPosition()

	const dropdownRef = useOutsideClick(() => {
		if (isOpen) setIsOpen(false)
	})

	return (
		<header
			className={`${styles.header} ${scrollY > 5 ? styles.header_scrolled : ''} ${drawer ? styles.active_drawer : ''}`}
		>
			<div className={`container ${styles.header__container}`}>
				<Link
					href={'/'}
					className={styles.logo}
				>
					<Image
						src={'/favicon.ico'}
						width={30}
						height={30}
						alt="Homex logo icon"
					/>
					<Image
						src={'/icons/logo_text.svg'}
						width={80}
						height={20}
						alt="Homex logo text"
					/>
				</Link>
				<div className="hidden md:block">
					<Nav />
				</div>
				<div
					ref={dropdownRef}
					className="hidden relative md:block"
				>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`flex items-center gap-2 text-white text-sm ${
							isOpen && 'rounded-b-none border-b-0'
						}`}
					>
						<span className="uppercase text-lg">{locale}</span>
						<Image
							src={'/icons/arrow-down.svg'}
							width={18}
							height={18}
							alt="Arrow down"
						/>
					</button>

					<div
						className={`w-full absolute left-0 top-[120%] flex flex-col px-2 bg-white rounded-md transition-all duration-200 ${
							isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
						}`}
					>
						{['uz', 'ru', 'en']
							.filter(el => el !== locale)
							.map(l => (
								<Link
									key={l}
									href={pathname}
									locale={l}
									onClick={() => setIsOpen(false)}
									className="flex justify-center text-center gap-x-2 uppercase py-1 text-sm"
								>
									<span className="text-[#171717] hover:text-primary">
										{l}
									</span>
								</Link>
							))}
					</div>
				</div>
				<button
					onClick={() => setDrawer(!drawer)}
					className="md:hidden"
					aria-label='Menu button'
					aria-labelledby='Mobile menu open close'
				>
					{drawer ? <X size={24} /> : <Menu size={24} />}
				</button>
				<NavDrawer
					drawer={drawer}
					close={() => setDrawer(false)}
				/>
			</div>
		</header>
	)
}
