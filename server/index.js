import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

// CORS - Habilitar la comunicacion con el frontend.
app.use(cors());
// Habilitar el uso de JSON
app.use(express.json());

app.use(indexRoutes);
app.use('/api/', tasksRoutes);

app.listen(PORT);

console.log(`Server listening on port ${PORT}`);