import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
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
								Home
							</Link>
						</li>
						<li className={styles['nav__list--item']}>
							<Link
								href={'#services'}
								className={styles['nav__list--item-link']}
							>
								Services
							</Link>
						</li>
						<li className={styles['nav__list--item']}>
							<Link
								href={'#gurantee'}
								className={styles['nav__list--item-link']}
							>
								Guarantee
							</Link>
						</li>
						<li className={styles['nav__list--item']}>
							<Link
								href={'#reviews'}
								className={styles['nav__list--item-link']}
							>
								Reviews
							</Link>
						</li>
						<li className={styles['nav__list--item']}>
							<Link
								href={'#contact'}
								className={styles['nav__list--item-link']}
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				<div className="hidden md:block">
					<button className="flex items-center gap-2.5 cursor-pointer">
						<span>ENG</span>
						<Image
							src={'/icons/arrow-down.svg'}
							width={18}
							height={18}
							alt="Arrow down"
						/>
					</button>
				</div>
				<button className="md:hidden">
					<Menu size={24} />
				</button>
			</div>
		</header>
	)
}
