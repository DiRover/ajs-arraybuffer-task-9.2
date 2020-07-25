import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('check string', () => {
  const buffer = getBuffer(); // получаем буфер из функции
  const converter = new ArrayBufferConverter(); // получаем инстанс каласса
  converter.toString(buffer);// подаём буфер в метод для конвертации
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const received = converter.load();
  expect(received).toBe(expected);
});
