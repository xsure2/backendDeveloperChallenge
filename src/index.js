import express from 'express';
import dotenv from 'dotenv';
import productRouter from  './products/infrastructure/ProductRouter.js';
import testerRouter from './testers/infrastructure/TesterRouter.js';
import testRouter from './tests/infrastructure/TestRouter.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.APP_HOST || 'hettp://localhost';


const swaggerDocument = YAML.load('./documentation/base.yaml');

const products = YAML.load('./documentation/products.yaml');
const testers = YAML.load('./documentation/testers.yaml');
const tests = YAML.load('./documentation/tests.yaml');

swaggerDocument.paths = {
  ...products.paths,
  ...testers.paths,
  ...tests.paths,
};


app.use(express.json());

//Routes
app.use('/testers', testerRouter);
app.use('/products', productRouter);
app.use('/tests', testRouter);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

export default app;

app.listen(port, () => {
  console.log(`Server running on ${host}:${port}`);
  console.log(`Swagger docs available at ${host}:${port}/api-docs`);
});
