import express, { Express, Request, Response } from "express";
import authRouter from "./controllers/auth";

const app: Express = express();
const port = process.env.API_PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Auth service is running...");
});

app.use(express.json());
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
