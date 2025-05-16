import { useState ,useEffect} from "react";
interface CoinChartProps {
  coinId:string;
}
export const CoinChart = ({coinId}:CoinChartProps) => {
    const [historicalData,setHistoricalData]=useState<any>([]);
     async function getTopCoins() {
        const url =
          `https://pro-api.coingecko.com/api/v3/coins/${coinId}/market_chart?days=10`
      
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error('Failed to fetch top coins');
          const data = await res.json();
          setHistoricalData(data);
        } catch (error) {
          console.error('Error fetching top coins:', error);
          return [];
        }
      }
      useEffect(()=>{
        getTopCoins();
      },[])
    
    
    return(
        <div>
            <h1>Chart</h1>
        </div>
    )
}