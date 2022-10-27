import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import travel from './travel/reducer'

export const store = configureStore({
    reducer: {
        travel,
    },
})

export const useAppDispatch = () => useDispatch()