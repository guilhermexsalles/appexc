import { Router } from "express";
import * as controller from "../controllers/transacaoController.js";

const router = Router();

/**
 * @swagger
 * /api/transacoes:
 *   get:
 *     summary: Lista todas as transações
 */
router.get("/", controller.listar);

router.get("/:id", controller.obter);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.remover);

export default router;
