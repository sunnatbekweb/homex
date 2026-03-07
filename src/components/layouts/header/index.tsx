'use client'

import { NavDrawer } from '@/components/ui/drawer/NavDrawer'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { Link, usePathname } from '@/i18n/routing'
import { Menu } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import styles from './style.module.scss'

export const Header = () => {
	const [drawer, setDrawer] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const t = useTranslations('nav')
	const locale = useLocale()
	const pathname = usePathname()

	const dropdownRef = useOutsideClick(() => {
		if (isOpen) setIsOpen(false)
	})

	return (
		<header className={`${styles.header} ${drawer ? styles.active : ''}`}>
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
				<nav className={styles.nav}>
					<ul className={styles.nav__list}>
						<li className={styles['nav__list--item']}>
							<Link
								href={'#top'}
								className={styles['nav__list--item-link']}
							>
								{t('home')}
							</Link>
						</li>
						<li className={styles['nav__list--item']}>
							<Link
								href={'#services'}
								className={styles['nav__list--item-link']}
							>
								{t('services')}
							</Link>
						</li>
						<li className={styles['nav__list--item']}>
							<Link
								href={'#guarantee'}
								className={styles['nav__list--item-link']}
							>
								{t('guarantee')}
							</Link>
						</li>
						<li className={styles['nav__list--item']}>
							<Link
								href={'#reviews'}
								className={styles['nav__list--item-link']}
							>
								{t('reviews')}
							</Link>
						</li>
						<li className={styles['nav__list--item']}>
							<Link
								href={'#contact'}
								className={styles['nav__list--item-link']}
							>
								{t('contact')}
							</Link>
						</li>
					</ul>
				</nav>
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
									<span className="text-[#171717] hover:text-[#ff5931]">
										{l}
									</span>
								</Link>
							))}
					</div>
				</div>
				<button
					onClick={() => setDrawer(!drawer)}
					className="md:hidden"
				>
					<Menu size={24} />
				</button>
				<NavDrawer
					drawer={drawer}
					close={() => setDrawer(false)}
				/>
			</div>
		</header>
	)
}
