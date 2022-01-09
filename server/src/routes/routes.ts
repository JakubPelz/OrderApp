import { Router } from 'express';
import { GetClient, GetProducts, postClient } from '../controllers/client';

export const routes = (router: Router) => {
  router.get('/zakaznik', GetClient);
  router.post('/novy-zakaznik', postClient);
  router.get('/zbozi', GetProducts);
};
