import {
	getFaqs,
	getServices,
	getStatistics,
	getTestimonials,
	postContact
} from '@/api'
import { IContact } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useGetServices = () => {
	return useQuery({
		queryKey: ['services'],
		queryFn: () => getServices()
	})
}

export const useGetStatistics = () => {
	return useQuery({
		queryKey: ['statistics'],
		queryFn: () => getStatistics()
	})
}

export const useGetTestimonials = () => {
	return useQuery({
		queryKey: ['testimonials'],
		queryFn: () => getTestimonials()
	})
}

export const useGetFaqs = () => {
	return useQuery({
		queryKey: ['faqs'],
		queryFn: () => getFaqs()
	})
}

export const usePostContact = () => {
	return useMutation<unknown, unknown, IContact>({
		mutationKey: ['contact'],
		mutationFn: payload => postContact(payload)
	})
}
