/* eslint-disable comma-dangle */
module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'talentPool',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    port: process.env.DB_PORT || '3306',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || '123456',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    port: process.env.DB_PORT || '3306',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'database_production',
    host: 'mysqldb',
    dialect: 'mysql',
    port: process.env.DB_PORT || '3306',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
