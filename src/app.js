import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import transacoesRouter from "./routes/transacoes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger/swaggerConfig.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/transacoes", transacoesRouter);

app.get("/", (req, res) => res.json({ status: "API rodando 🚀" }));

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => console.log(`Servidor on http://localhost:${port}`));
}

export default app;
