// src/api/coingecko.ts

export async function getTopCoins(currency:string) {
    console.log("Home page api ",currency)
    const url =
      'https://api.coingecko.com/api/v3/coins/markets' +
      `?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
  
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch top coins');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching top coins:', error);
      return [];
    }
  }
  
