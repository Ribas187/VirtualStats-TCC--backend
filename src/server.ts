import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import AppError from './errors/AppError';
import 'express-async-errors';

import './typeorm';
import './container';

import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Server started at port 3333🚀');
});
