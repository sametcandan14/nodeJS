// console.log("1. görev");
// console.log("2. görev");
// console.log("3. görev");

// const func1 = () => {
//   console.log("func 1 tamamlandı");
// };

// const func2 = () => {
//   console.log("func 2 tamamlandı");
// };

// func2();
// func1();

/* const func1 = () => {
  console.log("func 1 tamamlandı");
  func2();
};

const func2 = () => {
  console.log("func 2 tamamlandı");
  func3();
};

const func3 = () => {
  console.log("func 3 tamamlandı");
};

func1(); */

/* const func1 = () => {
  console.log("func 1 tamamlandı");
  func3();
};

const func2 = () => {
  console.log("func 2 tamamlandı");
};

const func3 = () => {
  console.log("func 3 tamamlandı");
  func2();
};

func1(); */

// Single Thread - Senkron JS

/* let x = 5;
console.log("1. gelen veri", x);

setTimeout(() => {
  x = x + 5;
  console.log("2. gelen veri", x);
}, 5000);

x = x + 5;
console.log("3. gelen veri", x); */

const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => console.log(book.name));
};

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

// listBooks();

addBook({ name: "Kitap 4", author: "Yazar 4" }, listBooks);
