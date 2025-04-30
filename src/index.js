import express from 'express';
import dotenv from 'dotenv';
import productRouter from  './products/infrastructure/ProductRouter.js';
import testerRouter from './testers/infrastructure/TesterRouter.js';
import testRouter from './tests/infrastructure/TestRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/testers', testerRouter);
app.use('/products', productRouter);
app.use('/tests', testRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

export default app;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
