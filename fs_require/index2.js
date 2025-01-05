const fs = require("node:fs");

//Dosya Okumak

/* fs.readFile("password.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("dosya okundu");
}); */

// Dosya Yazmak

/* fs.writeFile(
  "example.json",
  '{ "name": "Samet", "age": 35 }',
  "utf8",
  (err) => {
    if (err) console.log(err);

    console.log("Dosya başarılı ir şekilde oluşturuldu.");
  }
); */

// Veri Eklemek

/* fs.appendFile("example.txt", "\n Aleyküm Selam", "utf8", (err) => {
  if (err) console.log(err);

  console.log("yeni veri başarılı bir şekilde eklendi.");
});
 */

// Dosya Silmek

/* fs.unlink("example.json", (err) => {
  if (err) console.log(err);
  console.log("dosya başarılı bir şekilde silindi");
});
 */

// Klasörler Oluşturma

/* fs.mkdir("uploads/img", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("klasörler oluşturuldu");
}); */

/* fs.rmdir("uploads", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("klasörler silindi");
});
 */
