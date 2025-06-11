import pool from "./db.js";

export async function buscarTodas() {
  const [rows] = await pool.query("SELECT * FROM transacoes ORDER BY data DESC, id DESC");
  return rows;
}

export async function buscarPorId(id) {
  const [rows] = await pool.query("SELECT * FROM transacoes WHERE id = ?", [id]);
  return rows[0];
}

export async function criar({ descricao, valor, tipo, data }) {
  const [result] = await pool.query(
    "INSERT INTO transacoes (descricao, valor, tipo, data) VALUES (?,?,?,?)",
    [descricao, valor, tipo, data]
  );
  return { id: result.insertId, descricao, valor, tipo, data };
}

export async function atualizar(id, { descricao, valor, tipo, data }) {
  await pool.query(
    "UPDATE transacoes SET descricao = ?, valor = ?, tipo = ?, data = ? WHERE id = ?",
    [descricao, valor, tipo, data, id]
  );
  return buscarPorId(id);
}

export async function remover(id) {
  await pool.query("DELETE FROM transacoes WHERE id = ?", [id]);
  return { mensagem: "Transação removida" };
}
