
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {useRouter} from '@tanstack/react-router'
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
  const router=useRouter();
  useEffect(()=>{
    async function getData(){
      const topCoins = await getTopCoins()
      setData(topCoins);
    }
    getData()
  },[])
  
    return(
      <div className='flex flex-col items-center w-[300px] md:w-[600px] text-white bg-violet-950 border border-white rounded-md'>
        <Table>
  <TableHeader>
    <TableRow>
     <TableHead className=" text-white">S.No</TableHead>
      <TableHead className="text-white">Coins</TableHead>
      <TableHead className="text-white">Price</TableHead>
      <TableHead className=" text-white">24H Change</TableHead>
      <TableHead className=" text-white">Market Cap</TableHead>
     
  
    </TableRow>
  </TableHeader>
  <TableBody>
  {data.map((coin, index) => (
    <TableRow key={coin.id} className="cursor-pointer" onClick={()=>router.navigate({to:`/coin/${coin.name}`})}>
      <TableHead className="text-white">{index + 1}</TableHead>
      <TableHead className="text-white flex items-center gap-2"><span><img src={coin.image} alt="" className="w-10 h-10" /></span>{coin.name}</TableHead>
      <TableHead className="text-white">{coin.current_price}</TableHead>
      <TableHead className=" text-white">{coin.price_change_24h}</TableHead>
      <TableHead className=" text-white">{coin.market_cap}</TableHead>
    </TableRow>
  ))}
  </TableBody>
</Table>
</div>
    )
}