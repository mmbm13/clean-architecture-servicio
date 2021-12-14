/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require */
import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

const sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  });

export { Sequelize, sequelize };
