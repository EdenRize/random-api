import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import { getRandomWordsMap } from '@/modules/random-word/random-word.controller';

export class RandomWordRoute implements Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/get-random-words-map`, getRandomWordsMap);
  }
}
