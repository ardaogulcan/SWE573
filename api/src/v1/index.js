import { Router } from 'express';

export default () => {
  const api = Router();

  api.get('/', (req, res) => {
    res.json({ version: '1' });
  });

  return api;
};
