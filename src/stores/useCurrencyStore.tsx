import { create } from 'zustand'

interface CurrencyState {
  currency: string
  symbol:string
  setCurrency: (newCurrency: string) => void
  setSymbol: (newSymbol: string) => void
}

const useCurrencyStore = create<CurrencyState>((set) => ({
  currency: 'USD',
  symbol:"$",
  setCurrency: (newCurrency: string) => set({ currency: newCurrency }),
  setSymbol: (newSymbol: string) => set({ symbol: newSymbol }),
  
  
}))



export default useCurrencyStore
