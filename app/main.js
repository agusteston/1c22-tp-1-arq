import express from 'express';
import PingRouter from "./ping/Router.js";
import IntensiveAlgorithmRouter from "./instensive_algorithm/Router.js";
import BboxRouter from './bbox/Router.js';
 
const app = express();
const port = process.env.PORT || 3003;

app.use('/', BboxRouter)
app.use('/', PingRouter);
app.use('/', IntensiveAlgorithmRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});