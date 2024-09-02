import { communicateWithOpenAI } from '../src/lib/openAIApi.js';

import data from '../src/data/dataset.js';

const game = data.item;
describe('communicateWithOpenAI', () => {
  test('deberia devolver el gameId', () => {
    return communicateWithOpenAI().then(data => {
      expect(data).toBe(game.Id);
    });
  });
});