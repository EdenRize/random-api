import { App } from '@/app';
import { RandomWordRoute } from '@/routes/random-word.routes';

const app = new App([
  new RandomWordRoute(),
]);

app.listen();
