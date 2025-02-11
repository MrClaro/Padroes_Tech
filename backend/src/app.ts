import express from "express";
import { Router, Request, Response } from "express";

const app = express();

const router = Router();

app.use(express.json());

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
