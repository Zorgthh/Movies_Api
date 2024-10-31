// db.js

const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar las variables de entorno

// Crear una instancia de Sequelize usando la URL de conexión de la base de datos
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Para requerir SSL
      rejectUnauthorized: false, // Cambiar a true en producción para mayor seguridad
    },
  },
  logging: false, // Cambia a true si deseas ver las consultas SQL
});

// Función para probar la conexión a la base de datos
const testConnection = async () => {
  for (let i = 0; i < 5; i++) {
    try {
      await sequelize.authenticate();
      console.log('Conexión a la base de datos establecida correctamente.');
      break; // Sale del bucle si la conexión es exitosa
    } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
      console.log(`Reintentando conexión... (${i + 1}/5)`);
      await new Promise(res => setTimeout(res, 2000)); // Espera 2 segundos antes de reintentar
    }
  }
};

// Llama a la función para probar la conexión
testConnection();

module.exports = sequelize; // Exporta la instancia de Sequelize para usarla en otros archivos
