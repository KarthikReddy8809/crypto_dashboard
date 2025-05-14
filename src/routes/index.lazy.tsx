import { SearchBar } from '@/Components/SearchBar'
import { createLazyFileRoute } from '@tanstack/react-router'


export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className="flex flex-col items-center  h-screen gap-8">
      <div className='flex flex-col gap-5 font-bold text-white text-4xl md:text-6xl mt-[100px]'>
      <h1 className='text-center'>Largest</h1>
      <h1>Crypto Marketplace</h1>
      </div>
      <div className='flex flex-col gap-2 text-white text-center flex-wrap'>
      <h5>Welcome to the world's largest cryptocurrency marketplace.</h5>
      <h5>Signup to explore more about cryptos.</h5>
      </div>
      <SearchBar/>
    </div>
  )
}
