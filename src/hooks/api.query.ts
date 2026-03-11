import {
	getFaqs,
	getHeroVideo,
	getServiceById,
	getServices,
	getStatistics,
	getTestimonials,
	postContact
} from '@/api'
import { IFaq, IService, ITestimonials } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useGetHeroVideo = () => {
	return useQuery<{ poster: string; video: string }>({
		queryKey: ['hero-video'],
		queryFn: () => getHeroVideo()
	})
}

export const useGetServices = () => {
	return useQuery<IService[]>({
		queryKey: ['services'],
		queryFn: () => getServices()
	})
}

export const useGetServiceById = (id: string) => {
	return useQuery<IService>({
		queryKey: ['service', id],
		queryFn: () => getServiceById(id)
	})
}

export const useGetStatistics = () => {
	return useQuery({
		queryKey: ['statistics'],
		queryFn: () => getStatistics()
	})
}

export const useGetTestimonials = () => {
	return useQuery<ITestimonials[]>({
		queryKey: ['testimonials'],
		queryFn: () => getTestimonials()
	})
}

export const useGetFaqs = () => {
	return useQuery<IFaq[]>({
		queryKey: ['faqs'],
		queryFn: () => getFaqs()
	})
}

export const usePostContact = () => {
	return useMutation({
		mutationKey: ['contact'],
		mutationFn: (payload: FormData) => postContact(payload)
	})
}
