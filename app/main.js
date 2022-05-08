import express from 'express';
 
const app = express();
const port = process.env.PORT || 3003;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});