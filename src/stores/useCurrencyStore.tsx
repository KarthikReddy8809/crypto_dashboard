import { create } from 'zustand'

interface CurrencyState {
  currency: string
  setCurrency: (newCurrency: string) => void
}

const useCurrencyStore = create<CurrencyState>((set) => ({
  currency: 'USD',
  setCurrency: (newCurrency: string) => set({ currency: newCurrency }),
  
  
}))



export default useCurrencyStore
