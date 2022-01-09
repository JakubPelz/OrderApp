import { Request, Response } from 'express';

const Product = [
  {
    title: 'Světelný meč - modrý',
    color: 'Modrá barva',
    properities: 'Jednoruční',
    image:
      'https://ae01.alicdn.com/kf/H349249c4521f4b47a0685178968e2fc2o/Cosplay-Lightsaber-with-Light-Sound-Led-Red-Green-Blue-Saber-laser-Metal-Sword-Toys-Birthday-Star.jpg',
    price: 269,
  },
  {
    title: 'Světelný meč - červený',
    color: 'Červená barva',
    properities: 'Jednoruční',
    image:
      'https://www.bestdarky.cz/images_cache/w320h320/2/C/D/6caf977ec434a4c47a41be60f420b206.jpg',
    price: 358,
  },
  {
    title: 'Obouruční meč',
    color: 'Barva modrá',
    properities: 'Obouruční',
    image: 'https://m.media-amazon.com/images/I/51oQ7YsJ7nL._AC_SL1200_.jpg',
    price: 895,
  },
];

const Customer = {};

export const postClient = async (req: Request, res: Response) => {};

export const GetClient = async (req: Request, res: Response) => {
  console.log('Client');
};

export const GetProducts = async (req: Request, res: Response) => {
  try {
    const products = Product;
    res.send(products);
  } catch {
    res.status(404);
    res.send({ error: 'Products not exists.' });
  }
};
