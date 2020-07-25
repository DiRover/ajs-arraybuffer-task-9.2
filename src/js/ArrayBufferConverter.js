// конвертация типизированного массива
class ArrayBufferConverter { // создаём класс
  load() { // метода для возвращения строки
    return this.str;
  } // метод для конвертации буфера

  toString(buffer) { // получаем буфер
    const bufferView = new Uint16Array(buffer); // получаем 16 битное представление буфера
    let str = ''; // переменная со строкой
    for (let i = 0; i < bufferView.length; i += 1) { // проходим по массиву представления буфера
      str += String.fromCharCode(bufferView[i]); // переводит юникода в символы
    }
    this.str = str; // получаем строку
  }
}

export default ArrayBufferConverter;
