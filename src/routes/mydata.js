import { Router } from "express";

const router = Router();

router.get("/subject", (req, res) => {
  const subject = "ITE 314";
  const exam = "P2";
  const nodejs = "NODEJS";
  res.status(200).send({ subject, exam, nodejs });
});

export default router;
