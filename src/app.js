// app.js
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import swaggerDocs from '../swagger.js';

const app = express();

// Configurar middlewares
app.use(express.json());

// Swagger UI
swaggerDocs(app);

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/api/task', taskRoutes);

export default app 