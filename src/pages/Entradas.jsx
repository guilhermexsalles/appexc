import { useState } from 'react';
import data from '../data/transactions.json';

export default function Entradas() {
  const [entradas, setEntradas] = useState(data.entradas);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const adicionarEntrada = () => {
    const nova = { descricao, valor: parseFloat(valor) };
    setEntradas([...entradas, nova]);
    setDescricao("");
    setValor("");
  };

  const removerEntrada = (index) => {
    const novaLista = entradas.filter((_, i) => i !== index);
    setEntradas(novaLista);
  };

  return (
    <div>
      <h1>Entradas</h1>

      <input placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <input placeholder="Valor" type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
      <button onClick={adicionarEntrada}>Adicionar</button>

      <ul>
        {entradas.map((e, i) => (
          <li key={i}>
            {e.descricao} - R$ {e.valor.toFixed(2)}
            <button onClick={() => removerEntrada(i)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}