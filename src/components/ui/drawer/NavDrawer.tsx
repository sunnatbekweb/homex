import { Link } from '@/config/i18n/routing'
import { useIntersection } from '@/hooks/useIntersection'
import { useTranslations } from 'next-intl'

export const NavDrawer = ({
	drawer,
	close
}: {
	drawer: boolean
	close: () => void
}) => {
	const t = useTranslations('nav')
	const { activeSection } = useIntersection()

	return (
		<div
			className={`${drawer ? 'left-0' : 'left-full'} w-full h-screen fixed top-15 left-0 bg-[#171717] duration-300`}
		>
			<ul className="p-5 flex flex-col gap-5">
				<li>
					<Link
						href={'/'}
						onClick={() => {
							window?.scrollTo(0, 0)
							close()
						}}
						className={`${activeSection === 'home' ? 'text-primary' : ''} duration-200`}
					>
						{t('home')}
					</Link>
				</li>
				<li>
					<Link
						href={{ pathname: '/', hash: 'services' }}
						onClick={close}
						className={`${activeSection === 'services' ? 'text-primary' : ''} duration-200`}
					>
						{t('services')}
					</Link>
				</li>
				<li>
					<Link
						href={{ pathname: '/', hash: 'reviews' }}
						onClick={close}
						className={`${activeSection === 'reviews' ? 'text-primary' : ''} duration-200`}
					>
						{t('reviews')}
					</Link>
				</li>
				<li>
					<Link
						href={{ pathname: '/', hash: 'faq' }}
						onClick={close}
						className={`${activeSection === 'faq' ? 'text-primary' : ''} duration-200`}
					>
						{t('guarantee')}
					</Link>
				</li>
				<li>
					<Link
						href={{ pathname: '/', hash: 'contact' }}
						onClick={close}
						className={`${activeSection === 'contact' ? 'text-primary' : ''} duration-200`}
					>
						{t('contact')}
					</Link>
				</li>
			</ul>

			{/* <div className="px-5 py-5.5 flex items-center gap-5">
				<Link
					href={pathname}
					locale="uz"
					className={`${locale === 'uz' ? 'underline' : ''} leading-normal`}
				>
					UZB
				</Link>
				<Link
					href={pathname}
					locale="ru"
					className={`${locale === 'ru' ? 'underline' : ''} leading-normal`}
				>
					RUS
				</Link>
				<Link
					href={pathname}
					locale="en"
					className={`${locale === 'en' ? 'underline' : ''} leading-normal`}
				>
					ENG
				</Link>
			</div> */}
		</div>
	)
}
