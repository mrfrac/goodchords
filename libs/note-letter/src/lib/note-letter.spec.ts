import { NoteLetter } from './note-letter';

describe('Note letter testing', () => {
  test('throw error on bad letter', () => {
    expect(() => {
      new NoteLetter('x');
    }).toThrowError();
  });
});
