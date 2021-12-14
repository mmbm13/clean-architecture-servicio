/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-import-module-exports
import express from 'express';
import dotenv from 'dotenv';
import ClientRouter from './client/frameworks-drivers/routes/clientRoutes';

const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/api/V1/cliente', ClientRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
