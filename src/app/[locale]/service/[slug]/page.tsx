'use client'

import { Contact } from '@/components/containers/contact'
import { ServiceHero } from '@/components/containers/hero/ServiceHero'
import { Detail } from '@/components/containers/services/Detail'
import { use } from 'react'

export default function ServiceDetail({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = use(params)

	return (
		<main>
			<ServiceHero title={slug} />
			<Detail />
			<Contact id="services" />
		</main>
	)
}
