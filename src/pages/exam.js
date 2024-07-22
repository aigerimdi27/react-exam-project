// Вопрос 1: Найти нечетные числа
// Напишите функцию oddNumbers, которая принимает два аргумента: 
// нижнюю и верхнюю границы. Функция должна возвращать массив всех 
// нечетных чисел между этими границами (включительно).

// Например:
// oddNumbers(3, 15); // возвращает [3, 5, 7, 9, 11, 13, 15]

const oddNumbers = (a, b) => {
    let num = 0
    // let arr = String(num).split(',')
    // let arr2 = Number(arr)
    if (num % 2 !== 0) {
        return arr2
    }
    return 
}
// Вопрос 2: Уникальные символы
// Напишите функцию uniqueChars, которая принимает строку и возвращает 
// true, если все символы в строке уникальны, и false в противном случае. 
// Регистры символов различаются, то есть 'a' и 'A' считаются разными 
// символами.

// uniqueChars('abcdef'); // возвращает true
// uniqueChars('aA'); // возвращает true
// uniqueChars('hello'); // возвращает false
const uniqueChars = (str) => {
    if(str.indexOf() !== str.lastIndexOf()) {
        return true
    } else {
        return false
    }
}