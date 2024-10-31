const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes'); // Asegúrate de que esta línea sea correcta

app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON
app.use('/movies', movieRoutes); // Registra el router

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
