require('dotenv').config()
module.exports = {
  development: {
    database: 'solarSystemQuack',
    dialect: 'postgres',
  },
  test: {
    database: 'solarSystemQuack_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
