import express from 'express';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

// Habilitar el uso de JSON
app.use(express.json());

app.use(indexRoutes);
app.use('/api/', tasksRoutes);

app.listen(PORT);

console.log(`Server listening on port ${PORT}`);