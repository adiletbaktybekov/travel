import { Store } from '../types'
import { useSelector } from 'react-redux'

export const useTravel = () => {
    return useSelector((state: Store) => state.travel.travel)
}

export const useTravelDetails = () => {
    return useSelector((state: Store) => state.travel.travel_details)
}

export const useTravelFAQ = () => {
    return useSelector((state: Store) => state.travel.travel_faq)
}
