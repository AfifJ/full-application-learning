import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const port = process.env.PORT || 5001;

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';

connectDB();
const app = express();

/* my routes */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => res.send('API is running ...'));
}

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log('Running : http://localhost:' + port + '/'));

/* 
POST /api/users = register user
POST /api/users/auth = authenticate a user and get token 
POST /api/users/logout = logout user and clear cookie
GET /api/users/profile = get user profile
PUT /api/users/profile = update profile
*/
