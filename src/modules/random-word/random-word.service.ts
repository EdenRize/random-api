import axios from 'axios';
import pLimit from 'p-limit';

export const generateRandomWordsMap = async () => {
  const url = 'https://random-word-api.vercel.app/api?words=1';
  const CALLS = 6000;
  const limit = pLimit(50);

  const promises = Array.from({ length: CALLS }, () =>
    limit(() => {
      return axios
        .get(url)
        .then(res => res.data)
        .catch(err => {
          throw new Error(`API request failed: ${err}`);
        });
    }),
  );

  const results = await Promise.all(promises);
  const wordsMap = {};
  results.forEach(word => {
    if (!wordsMap[word]) {
      wordsMap[word] = 1;
    } else {
      wordsMap[word]++;
    }
  });
  return wordsMap;
};
