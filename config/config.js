require('dotenv').config(); // Cargar variables de entorno

module.exports = {
    development: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        dialectOptions: {
            connectTimeout: 30000 // Ajusta el timeout según sea necesario
        }
    },
    test: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        dialectOptions: {
            connectTimeout: 30000
        }
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        dialectOptions: {
            connectTimeout: 30000
        }
    }
};
