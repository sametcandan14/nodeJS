function getData(data) {
  return new Promise((resolve, reject) => {
    // promise dönüyoruz.
    console.log("Veriler alınmaya çalışılıyor..");

    if (data) {
      resolve("Verilen alındı");
    } else {
      reject("Veriler alınamadı");
    }
  });
}

function cleanData(receivedData) {
  // promise dönüyoruz.
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor..");

    if (receivedData) {
      resolve("Verilen düzenlendi");
    } else {
      reject("Veriler düzenlenemedi");
    }
  });
}

/* getData(true)
  .then((res) => {
    console.log(res);
    return cleanData(false);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

// Async-Await

/* async function prosessData() {
  try {
    const receivedData = await getData(true);
    console.log(receivedData);
    const cleanedData = await cleanData(false);
    console.log(cleanedData);
  } catch (err) {
    console.log(err);
  }
}

prosessData(); */

const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => console.log(book.name));
};

const addBook = (newBook) => {
  const promise1 = new Promise((res, rej) => {
    books.push(newBook);
    res(books);
    // rej("bir hata oluştu")
  });
  return promise1;
};

/* addBook({ name: "Kitap 4", author: "Yazar 4" })
  .then(() => {
    console.log("yeni liste");
    listBooks();
  })
  .catch((err) => console.log(err)); */

async function showBooks() {
  try {
    await addBook({ name: "Kitap 12", author: "Yazar 12" });
    listBooks();
  } catch (err) {
    console.log(err);
  }
}

showBooks();
