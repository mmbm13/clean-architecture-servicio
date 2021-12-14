/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-import-module-exports
import express from 'express';
import Mongo from './frameworks-drivers/ormMongoose/conection';
import ImageRouter from './frameworks-drivers/routes/imageRoutes';

const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../public')));

Mongo.init();

app.use('/api/V1/imagen', ImageRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
