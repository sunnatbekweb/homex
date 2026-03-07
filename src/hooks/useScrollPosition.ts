'use client'

import { useEffect, useState } from 'react'

export function useScrollPosition(): number {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handelScroll = () => setScrollY(window.scrollY)

		window.addEventListener('scroll', handelScroll)

		handelScroll()

		return () => {
			window.removeEventListener('scroll', handelScroll)
		}
	}, [])

	return scrollY
}
