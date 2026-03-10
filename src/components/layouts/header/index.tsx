'use client'

import { NavDrawer } from '@/components/ui/drawer/NavDrawer'
import { LanguageDropdown } from '@/components/ui/dropdown/LanguageDropdown'
import { Nav } from '@/components/ui/nav'
import { Link } from '@/config/i18n/routing'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import styles from './style.module.scss'

export const Header = () => {
	const [drawer, setDrawer] = useState(false)
	const scrollY = useScrollPosition()

	return (
		<header
			className={`${styles.header} ${scrollY > 5 ? styles.header_scrolled : ''} ${drawer ? styles.active_drawer : ''}`}
		>
			<div className={`container ${styles.header__container}`}>
				<Link
					href={'/'}
					className={styles.logo}
					onClick={() => window?.scrollTo(0, 0)}
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
				<div className="hidden md:block">
					<LanguageDropdown />
				</div>
				<div className="md:hidden flex items-center gap-3.75">
					<LanguageDropdown />
					<button
						onClick={() => setDrawer(!drawer)}
						aria-label="Menu button"
						aria-labelledby="Mobile menu open close"
					>
						{drawer ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
				<NavDrawer
					drawer={drawer}
					close={() => setDrawer(false)}
				/>
			</div>
		</header>
	)
}
