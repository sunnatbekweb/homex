import { useEffect, useState } from 'react'

export const useIntersection = () => {
	const [activeSection, setActiveSection] = useState('home')

	useEffect(() => {
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
	}, [])
	return { activeSection }
}
