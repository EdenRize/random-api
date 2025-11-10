import { Request, Response } from 'express';
import { generateRandomWordsMap } from './random-word.service';

export const getRandomWordsMap = async (req: Request, res: Response) => {
  try {
    const wordsMap = await generateRandomWordsMap();
    res.send(wordsMap);
  } catch (error) {
    res.status(500).send({ error: `Failed to fetch random words: ${error}` });
  }
};
