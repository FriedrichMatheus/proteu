import { Request, Response, request } from "express";
import express from "express";
import { PATHS } from "./path";

const app = express();
const port = process.env.PORT || 3000;

interface IRequest {
  req: Request;
  res: Response;
}

app.get(PATHS.PING, ({ req, res }: IRequest) => {
  res.send("pong");
});

app.post(PATHS.LOGIN, ({ req, res }: IRequest) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
