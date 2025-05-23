import { create } from 'zustand'

interface CurrencyState {
  currency: string
  symbol:string
  coinId:string
  flag:boolean
  token:string
  setCurrency: (newCurrency: string) => void
  setSymbol: (newSymbol: string) => void
  setCoinId:(newCoinId: string) => void
  setFlag:(newFlag:boolean)=>void
  setToken: (token:string) => void
}

const useCurrencyStore = create<CurrencyState>((set) => ({
  currency: 'USD',
  symbol:"$",
  coinId: " ",
  flag:false,
  token: localStorage.getItem('token') || "",
  setCurrency: (newCurrency: string) => set({ currency: newCurrency }),
  setSymbol: (newSymbol: string) => set({ symbol: newSymbol }),
  setCoinId: (newCoinId: string) => set({coinId:newCoinId}),
  setFlag:(newFlag:boolean) => set({flag:newFlag}),
  setToken: (token:string) => {
    localStorage.setItem('token', token);
    set({ token });
  },

}))



export default useCurrencyStore
