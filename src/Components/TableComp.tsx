
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {useRouter} from '@tanstack/react-router'
  import useCurrencyStore from '../stores/useCurrencyStore'
  import { Loader2 } from 'lucide-react';
  import { useEffect,useState } from "react";

  import {getTopCoins} from '../api/HomePageApi'

  type coin = {
    id: string;
    name: string;
    current_price: number;
    price_change_24h: number;
    market_cap: number;
    image:string; // If you meant to use price_change or similar, update accordingly
  };

export const TableComp = () => {
  const [data,setData]=useState<coin[]>([]);
  const [loading,setLoading]=useState<boolean>(false);
  const {currency,symbol,setCoinId}=useCurrencyStore()
 const handleClick=(coinId:string)=>{
    const token=localStorage.getItem("token");
    if(!token)
    {
      setCoinId(coinId);
      router.navigate({to:`/signup`});

    }
    else{
    router.navigate({to:`/coin/${coinId}`})
    }
  }
  const router=useRouter();
  useEffect(()=>{
    setLoading(true);
    async function getData(){
      const topCoins :coin[] = await getTopCoins(currency)
      setData(topCoins);
      setLoading(false);
    }
    getData()
  },[currency])
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-white">
        <Loader2 className="h-8 w-8 animate-spin mr-2" />
        Loading...
      </div>
    );
  }
  else{
    return(
      <div className='flex flex-col items-center w-[300px] md:w-[700px] text-white bg-violet-950 border border-black shadow-lg rounded-md'>
        <Table>
  <TableHeader>
    <TableRow>
     <TableHead className=" text-white text-sm md:text-md">S.No</TableHead>
      <TableHead className="text-white text-sm md:text-md">Coins</TableHead>
      <TableHead className="text-white text-sm md:text-md">Price</TableHead>
      <TableHead className=" text-white text-sm md:text-md">24H Change</TableHead>
      <TableHead className=" text-white text-sm md:text-md">Market Cap</TableHead>
     
  
    </TableRow>
  </TableHeader>
  <TableBody className="items-center w-[200px] md:w-[700px] text-sm md:text-md">
  {data.map((coin, index) => (
    <TableRow key={coin.id} className="cursor-pointer" onClick={()=>handleClick(coin.id)}>
      <TableHead className="text-white text-sm md:text-md">{index + 1}</TableHead>
      <TableHead className="text-white flex items-center gap-2"><span><img src={coin.image} alt="" className="w-10 h-10" /></span>{coin.name}</TableHead>
      <TableHead className="text-white text-sm md:text-md">{symbol}{coin.current_price}</TableHead>
      {coin.price_change_24h>0?(<TableHead className=" text-green-500">{Math.floor(coin.price_change_24h*100)/100}%</TableHead>):(<TableHead className=" text-red-500">{Math.floor(coin.price_change_24h*100)/100}%</TableHead>)}
      <TableHead className=" text-white text-sm md:text-md">{symbol}{coin.market_cap}</TableHead>
    </TableRow>
  ))}
  </TableBody>
</Table>
</div>
    )
}
}