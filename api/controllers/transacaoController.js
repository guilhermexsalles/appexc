import * as Transacao from "../models/transacaoModel.js";

export const listar = async (req, res, next) => {
  try {
    const transacoes = await Transacao.buscarTodas();
    res.json(transacoes);
  } catch (err) {
    next(err);
  }
};

export const obter = async (req, res, next) => {
  try {
    const transacao = await Transacao.buscarPorId(req.params.id);
    if (!transacao) return res.status(404).json({ erro: "Não encontrada" });
    res.json(transacao);
  } catch (err) {
    next(err);
  }
};

export const criar = async (req, res, next) => {
  try {
    const nova = await Transacao.criar(req.body);
    res.status(201).json(nova);
  } catch (err) {
    next(err);
  }
};

export const atualizar = async (req, res, next) => {
  try {
    const atualizada = await Transacao.atualizar(req.params.id, req.body);
    res.json(atualizada);
  } catch (err) {
    next(err);
  }
};

export const remover = async (req, res, next) => {
  try {
    const resultado = await Transacao.remover(req.params.id);
    res.json(resultado);
  } catch (err) {
    next(err);
  }
};
