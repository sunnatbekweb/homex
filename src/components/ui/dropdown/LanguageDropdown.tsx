import { Link, usePathname } from '@/config/i18n/routing'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

export const LanguageDropdown = () => {
	const [isOpen, setIsOpen] = useState(false)

	const locale = useLocale()
	const pathname = usePathname()

	const dropdownRef = useOutsideClick(() => {
		if (isOpen) setIsOpen(false)
	})

	return (
		<div
			ref={dropdownRef}
			className="relative"
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
							<span className="text-[#171717] hover:text-primary">{l}</span>
						</Link>
					))}
			</div>
		</div>
	)
}
