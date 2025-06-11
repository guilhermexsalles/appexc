import { useState } from 'react';
import data from '../data/transactions.json';

export default function Saidas() {
  const [saidas, setSaidas] = useState(data.saidas);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const adicionarSaida = () => {
    const nova = { descricao, valor: parseFloat(valor) };
    setSaidas([...saidas, nova]);
    setDescricao("");
    setValor("");
  };

  const removerSaida = (index) => {
    const novaLista = saidas.filter((_, i) => i !== index);
    setSaidas(novaLista);
  };

  return (
    <div>
      <h1>Saídas</h1>

      <input placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <input placeholder="Valor" type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
      <button onClick={adicionarSaida}>Adicionar</button>

      <ul>
        {saidas.map((s, i) => (
          <li key={i}>
            {s.descricao} - R$ {s.valor.toFixed(2)}
            <button onClick={() => removerSaida(i)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}