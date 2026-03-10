import { ContactInfo } from './ui/ContactInfo'
import { Form } from './ui/Form'

export const Contact = ({ id }: { id: string }) => {
	return (
		<section
			id={id}
			className="border-b border-[#505050]"
		>
			<div className="container">
				<div className="grid gap-y-12.5 gap-x-10 md:grid-cols-2 pt-15 md:pt-25 pb-20 md:pb-30">
					<ContactInfo />
					<Form />
				</div>
			</div>
		</section>
	)
}
