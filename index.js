require('dotenv').config();
const express = require('express');
const app = express();
const productRouter = require('./src/product/route');
const productRouterv2 = require('./src/product_v2/route');
const cors = require('cors');
const bodyParser = require('body-parser');

// app.use((req, res, next) => {
//   res.json({
//     status: 200,
//     message: 'Welcome To Express v2',
//   });
// });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', productRouter);
app.use('/api/v2', productRouterv2);

const { PORT } = process.env || 3000;
app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
