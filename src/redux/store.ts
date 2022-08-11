import { configureStore } from '@reduxjs/toolkit'
import { productCardSlice } from './productCardSlice'
// ...

export const store = configureStore({
    reducer: {
        productCardSlice: productCardSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch