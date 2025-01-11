/* 
1- employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
2-Bu veriyi okuyalım. (READ)
3-Bu veriyi güncelleyelim.
4-Dosyayı silelim. */

const fs = require("fs");

//1

/* fs.writeFile(
  "employee.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("dosya başarılı bir şekilde oluşturuldu");
  }
);
 */

//2
/* fs.readFile("employee.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("dosya başarılı bir şekilde okundu");
}); */

//3

/* fs.writeFile(
  "employee.json",
  '{"name": "Employee 1 Name", "salary": 3000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("dosya başarılı bir şekilde oluşturuldu");
  }
); */

//4

fs.unlink("employee.json", (err) => {
  if (err) console.log(err);
  console.log("dosya başarılı bir şekilde silindi");
});
