import { Contact } from '@/components/containers/contact'
import { ServiceHero } from '@/components/containers/hero/ServiceHero'
import { Detail } from '@/components/containers/services/Detail'
import { use } from 'react'

export default function ServiceDetail({
	params
}: {
	params: Promise<{ slug: string; id: string }>
}) {
	const { id } = use(params)
	return (
		<main>
			<ServiceHero id={id} />
			<Detail id={id} />
			<Contact id="services" />
		</main>
	)
}
