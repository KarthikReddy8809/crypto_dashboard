import  { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import useCurrencyStore from '../stores/useCurrencyStore'

interface CoinChartProps {
  coinId: string;
}

const PriceChart = ({coinId}:CoinChartProps) => {
  const [chartData, setChartData] = useState([
    ["Date", "Price (USD)"],
  ]);
  const [loading, setLoading] = useState(true);
  const [coinData,setCoinData]=useState<any>([]);
  const {currency}=useCurrencyStore()
  console.log("coin chart",currency)
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=30&interval=daily`
        );
        const data = await res.json();

        const formattedData = data.prices.map(([timestamp, price]:any) => {
          const date = new Date(timestamp);
          return [
            `${date.getMonth() + 1}/${date.getDate()}`, // MM/DD
            price,
          ];
        });

        setChartData((prev) => [...prev, ...formattedData]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };
    const fetchCoinById = async () => {
      try{
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        const data = await res.json();
        setCoinData(data);
      }
      catch(error){
        console.error("Error fetching coin by id:", error);
      }
    }
    fetchChartData();
    fetchCoinById();
  }, [currency]);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg">
      {loading ? (
        <p>Loading chart...</p>
      ) : (
        
        <Chart
          chartType="LineChart"
          height="400px"
          data={chartData}
          options={{
            title: "Bitcoin Price (Last 30 Days)",
            hAxis: { title: "Date" },
            vAxis: { title: "Price (USD)" },
            legend: "none",
            curveType: "function",
          }}
        />
      )}
      <div className="flex flex-col md:text-lg text-sm mt-10  gap-2"> 
      <div className="flex flex-row justify-between">
      <h3 className="text-white space-x-2">Crypto Market Rank</h3>
         <p className="text-white ">{coinData?.market_cap_rank}</p>
      </div>
      <hr className="w-full border-muted-foreground "/>
      <div className="flex flex-row justify-between">
      <h3 className="text-white space-x-2">Current Price </h3>
         <p className="text-white ">{coinData?.market_data?.current_price?.usd}</p>
      </div>
      <hr className="w-full border-muted-foreground"/>
      <div className="flex flex-row justify-between"> 
      <h3 className="text-white space-x-2">Market Cap </h3>
         <p className="text-white ">{coinData?.market_data?.market_cap?.usd}</p>
      </div>
      <hr className="w-full border-muted-foreground"/>
      <div className="flex flex-row justify-between"> 
      <h3 className="text-white space-x-2">24 Hour High </h3>
         <p className="text-white ">{coinData?.market_data?.high_24h?.usd}</p>
      </div>
      <hr className="w-full border-muted-foreground"/>
      <div className="flex flex-row justify-between"> 
      <h3 className="text-white space-x-2">24 Hour Low </h3>
         <p className="text-white ">{coinData?.market_data?.low_24h?.usd}</p>
      </div>
      <hr className="w-full border-muted-foreground"/>
      </div>
    </div>
  );
};

export default PriceChart;
