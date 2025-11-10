import { NextFunction, Request, Response } from 'express';
import { RandomService } from '../services/random.service';

export class RandomController {
  public randomService = new RandomService();

  public getRandomWordsMap = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const randomWordsMap = await this.randomService.getRandomWordsMap();
      
      res.status(200).json({ data: randomWordsMap, message: 'success' });
    } catch (error) {
      next(error);
    }
  };
}