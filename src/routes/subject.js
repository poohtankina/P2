import { Router } from "express";

const router = Router();

router.get("/subject", (req, res) => {
  const subject = "ITE 314";
  res.status(200).send({ subject });
});

export default router;
