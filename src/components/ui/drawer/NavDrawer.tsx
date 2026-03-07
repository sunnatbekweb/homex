import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const NavDrawer = ({
	drawer,
	close
}: {
	drawer: boolean
	close: () => void
}) => {
	const t = useTranslations('nav')
	return (
		<div
			className={`${drawer ? 'left-0' : 'left-full'} w-full h-screen fixed top-15 left-0 bg-[#171717] duration-300`}
		>
			<ul className="p-5 flex flex-col gap-5">
				<li>
					<Link
						href={'#top'}
						onClick={close}
					>
						{t("home")}
					</Link>
				</li>
				<li>
					<Link
						href={'#service'}
						onClick={close}
					>
						{t("services")}
					</Link>
				</li>
				<li>
					<Link
						href={'#guarantee'}
						onClick={close}
					>
						{t("guarantee")}
					</Link>
				</li>
				<li>
					<Link
						href={'#rewiews'}
						onClick={close}
					>
						{t("reviews")}
					</Link>
				</li>
				<li>
					<Link
						href={'#contact'}
						onClick={close}
					>
						{t("contact")}
					</Link>
				</li>
			</ul>
		</div>
	)
}
