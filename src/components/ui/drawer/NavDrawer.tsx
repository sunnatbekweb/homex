import Link from 'next/link'

export const NavDrawer = ({
	drawer,
	close
}: {
	drawer: boolean
	close: () => void
}) => {
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
						Home
					</Link>
				</li>
				<li>
					<Link
						href={'#service'}
						onClick={close}
					>
						Services
					</Link>
				</li>
				<li>
					<Link
						href={'#gurantee'}
						onClick={close}
					>
						Gurantee
					</Link>
				</li>
				<li>
					<Link
						href={'#rewiews'}
						onClick={close}
					>
						Reviews
					</Link>
				</li>
				<li>
					<Link
						href={'#contact'}
						onClick={close}
					>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	)
}
