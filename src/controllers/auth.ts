import { Router, Request, Response } from "express";

const router = Router();

router.post("/sign-in", (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send({});
});

router.post("/sign-up", (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  console.log(email, password, username);
  res.send({});
});

router.post("sign-out", (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(email);
  res.send({});
});

export default router;
