import { createFileRoute } from '@tanstack/react-router'
import {useParams} from '@tanstack/react-router'
import {useEffect,useState} from 'react'
import { Loader2 } from 'lucide-react'
import { CoinChart } from '@/Components/CoinChart'
export const Route = createFileRoute('/coin/$coinId')({
  component: RouteComponent,
})


function RouteComponent() {
  const {coinId}=useParams({ from: '/coin/$coinId' })
  const [loading,setLoading]=useState<boolean>(false);
  console.log(coinId)
  const [temp,setTemp]=useState<any>([]);
  async function getData(){
    setLoading(true);
    const url =
    `https://api.coingecko.com/api/v3/coins/${coinId}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch top coins');
    const data = await res.json();
    setLoading(false);
    console.log(data);
    setTemp(data);
  } catch (error) {
    console.error('Error fetching top coins:', error);
  }
    
  }
  useEffect(()=>{
    getData();
  },[]);
   if(loading)
   {
    return(
      <div className='flex items-center justify-center h-64 text-white'>
        <Loader2 className="h-8 w-8 animate-spin mr-2" />
        Loading...
      </div>
    )
   }
  return(
    <div className=' justify-center min-h-screen'>
      <div className='flex flex-col items-center mt-[100px] gap-8'>
        <img src={temp?.image?.large} alt="" className='w-50 h-50' />
        <h1 className='text-white text-4xl font-bold'>{temp.name}</h1>
        <CoinChart coinId={coinId}/>
      </div>
    </div>
  )
}
