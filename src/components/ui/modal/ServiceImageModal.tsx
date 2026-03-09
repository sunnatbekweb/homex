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
			className={`${isVisible ? 'visible opacity-100' : 'invisible opacity-0'} w-full h-screen flex justify-center items-center fixed top-0 left-0 z-50 bg-black/50 duration-300`}
		>
			{image && (
				<Image
					src={image}
					width={1200}
					height={860}
					alt="Image"
					className={`${isVisible ? 'scale-100' : 'scale-50'} w-full lg:w-3/4 px-4 aspect-video duration-200`}
				/>
			)}
		</div>
	)
}
