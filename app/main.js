import express from 'express';
import PingRouter from "./ping/Router.js";
 
const app = express();
const port = process.env.PORT || 3003;

app.use('/', PingRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});