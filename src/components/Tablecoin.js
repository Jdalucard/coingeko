import React from "react";
import Coinrow from "./Coinrow";

const titles = ["#", "coin", "Price", "Price Change", " Volumen  24h"];

const Tablecoin = ({ coins, search }) => {
  //filtro de moneda
  const MonedaFiltro = coins.filter((coin) => 
  coin.name.toLowerCase().includes(search.toLowerCase()) ||
  coin.symbol.toLowerCase().includes(search.toLowerCase())
    
  );



  return (
    <>
      <table className="table table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((title,index) => (
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
              {MonedaFiltro.map((coin,index)=>
              <Coinrow coin={coin} key={index} index={index +1}/>
              )}
        </tbody>
      </table>
    </>
  );
};

export default Tablecoin;
