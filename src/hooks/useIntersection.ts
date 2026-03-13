import { usePathname } from '@/config/i18n/routing'
import { useEffect, useState } from 'react'

export const useIntersection = () => {
	const [activeSection, setActiveSection] = useState('home')
	const pathname = usePathname()

	useEffect(() => {
		const timer = setTimeout(() => {
			const sections = document.querySelectorAll('section[id]')

			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							setActiveSection(entry.target.id)
						}
					})
				},
				{
					root: null,
					rootMargin: '0px',
					threshold: 0.5 // 50% блока должно быть видно
				}
			)

			sections.forEach(sec => observer.observe(sec))

			return () => sections.forEach(sec => observer.unobserve(sec))
		}, 50)

		return () => clearTimeout(timer)
	}, [pathname])
	return { activeSection }
}
