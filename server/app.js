import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import gastosRoutes from './routes/gastos.js';
import reservasRoutes from './routes/reservas.js';
import multasRoutes from './routes/multas.js';
import estacionamientosRoutes from './routes/estacionamientos.js';
import reportesRoutes from './routes/reportes.js';
import eventosRoutes from './routes/eventos.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error de conexión a MongoDB:', error));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/gastos', gastosRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/multas', multasRoutes);
app.use('/api/estacionamientos', estacionamientosRoutes);
app.use('/api/reportes', reportesRoutes);
app.use('/api/eventos', eventosRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

export default app;