import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.API_PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Auth service is running...");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
