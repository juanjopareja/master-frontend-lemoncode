import "./style.css";

// EXERCISE 1
console.log("- EJERCICIO 01 - ARRAY OPERATIONS");

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["a", "b", "c", "d"];
const mixedArray = [1, "b", 3, "d"];

// HEAD
console.log("- HEAD -");

const head = <T>(array: T[]): T | undefined => {
  const [first] = array;

  return first;
};

console.log("El primer elemento del array de números es: " + head(numberArray));
console.log("El primer elemento del array de strings es: " + head(stringArray));
console.log("El primer elemento del array mixto es: " + head(mixedArray));

// TAIL
console.log("- TAIL -");

const tail = <T>(array: T[]): T[] => {
  const [, ...rest] = array;

  return rest;
};

console.log("El resto de elementos del array de números son: " + tail(numberArray));
console.log("El resto de elementos del array de strings son: " + tail(stringArray));
console.log("El resto de elementos del array mixto son: " + tail(mixedArray));

// INIT
console.log("- INIT -");

const init = <T>(array: T[]): T[] => {
  return array.slice(0, -1);
};

console.log("Los elementos del array de números menos el último son: " + init(numberArray));
console.log("Los elementos del array de strings menos el último son: " + init(stringArray));
console.log("Los elementos del array mixto menos el último son: " + init(mixedArray));

// LAST
console.log("- LAST -");

const last = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

console.log("El último elemento del array de números es: " + last(numberArray));
console.log("El último elemento del array de strings es: " + last(stringArray));
console.log("El último elemento del array mixto es: " + last(mixedArray));
console.log("------------------");


// EXERCISE 2
console.log("- EJERCICIO 02 - CONCAT");

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];

const concat = <T, U>(array1: T[], array2: U[]): (T | U)[] => {
  return [...array1, ...array2];
};

console.log("La concatenación del array de números y el de strings es: " + concat(array1, array2));
console.log("------------------");


// EXERCISE 3
console.log("- EJERCICIO 03 - CLONE MERGE");

const object = { name: "John", lastname: "Couple", age: 34 };

// CLONE
console.log("- CLONE -");

const clone = <T>(source: T): T => {
  return { ...source };
};

const clonedObject = clone(object);

console.log("El nuevo objeto clonado del objeto original es: ");
console.log(clonedObject);

// MERGE
console.log("- MERGE -");

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = <T, U>(target: T, source: U): T & U => {
  return { ...source, ...target };
};

const mergedObject = merge(a, b);

console.log("El nuevo objeto resultante tras el merge es: ");
console.log(mergedObject);
console.log("------------------");


// EXERCISE 4
console.log("- EJERCICIO 04 - READBOOKS");

type bookType = {
  title: string;
  isRead: boolean;
};

const books: bookType[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
]

const isBookRead = (books: bookType[], title: string): boolean => {
  const book = books.find((book) => book.title === title);

  return book ? book.isRead : false;
};

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log("------------------");


// EXERCISE 5
console.log("- EJERCICIO 05 - SLOT MACHINE");

class SlotMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  public play(): void {
    this.coins++;
    console.log(`You have inserted a coin. Total coins: ${this.coins}`);
    const reel1: boolean = Math.random() < 0.5;
    const reel2: boolean = Math.random() < 0.5;
    const reel3: boolean = Math.random() < 0.5;

    if (reel1 && reel2 && reel3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlotMachine();

machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play();
machine1.play(); 
