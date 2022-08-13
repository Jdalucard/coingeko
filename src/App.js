import { useEffect, useState } from "react";
import axios from "axios";
import Tablecoin from "./components/Tablecoin";

export function App() {
  const [coins, setcoin] = useState([]);
  const [search, setsearch] = useState("");

  const gateDate = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    console.log(res.data);
    setcoin(res.data);
  };
  useEffect(() => {
    gateDate();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Buscar Moneda"
          className="form-control bg-dark text-light border-0 mt-4  text-center  "
          onChange={(evento) => setsearch(evento.target.value)}
        />
        <Tablecoin coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
