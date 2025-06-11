import { useEffect, useState } from 'react';
import data from '../data/transactions.json';

export default function Dashboard() {
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const entradas = data.entradas.reduce((acc, cur) => acc + cur.valor, 0);
    const saidas = data.saidas.reduce((acc, cur) => acc + cur.valor, 0);
    setSaldo(entradas - saidas);
  }, []);

  return (
   <div>

      <h1>Dashboard</h1>
      <p>Saldo: R$ {saldo.toFixed(2)}</p>
    </div>
  );
}
