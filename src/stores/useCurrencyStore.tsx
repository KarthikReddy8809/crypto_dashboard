import { create } from 'zustand'

interface CurrencyState {
  currency: string
  symbol:string
  coinId:string
  flag:boolean
  setCurrency: (newCurrency: string) => void
  setSymbol: (newSymbol: string) => void
  setCoinId:(newCoinId: string) => void
  setFlag:(newFlag:boolean)=>void
}

const useCurrencyStore = create<CurrencyState>((set) => ({
  currency: 'USD',
  symbol:"$",
  coinId: " ",
  flag:false,
  setCurrency: (newCurrency: string) => set({ currency: newCurrency }),
  setSymbol: (newSymbol: string) => set({ symbol: newSymbol }),
  setCoinId: (newCoinId: string) => set({coinId:newCoinId}),
  setFlag:(newFlag:boolean) => set({flag:newFlag})
}))



export default useCurrencyStore
