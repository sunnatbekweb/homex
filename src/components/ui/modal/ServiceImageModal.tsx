import Image from 'next/image'

export const ServiceImageModal = ({
	image,
	isVisible,
	close
}: {
	image: string
	isVisible: boolean
	close: () => void
}) => {
	return (
		<div
			onClick={close}
			className={`${isVisible ? 'visible opacity-100' : 'invisible opacity-0'} flex items-center fixed w-full h-screen top-0 left-0 z-50 bg-black/50 duration-300`}
		>
			{image && (
				<Image
					src={image}
					width={1200}
					height={860}
					alt="Image"
					className={`${isVisible ? 'scale-100' : 'scale-50'} max-w-3/4 aspect-video m-auto duration-200`}
				/>
			)}
		</div>
	)
}
