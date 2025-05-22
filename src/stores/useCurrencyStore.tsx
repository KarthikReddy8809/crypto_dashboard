import { create } from 'zustand'

interface CurrencyState {
  currency: string
  symbol:string
  coinId:string
  setCurrency: (newCurrency: string) => void
  setSymbol: (newSymbol: string) => void
  setCoinId:(newCoinId: string) => void
}

const useCurrencyStore = create<CurrencyState>((set) => ({
  currency: 'USD',
  symbol:"$",
  coinId: " ",
  setCurrency: (newCurrency: string) => set({ currency: newCurrency }),
  setSymbol: (newSymbol: string) => set({ symbol: newSymbol }),
  setCoinId: (newCoinId: string) => set({coinId:newCoinId})
}))



export default useCurrencyStore
