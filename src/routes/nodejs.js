import { Router } from "express";

const router = Router();

router.get("/nodejs", (req, res) => {
  const nodejs = "NODEJS";
  res.status(200).send({ nodejs });
});

export default router;
