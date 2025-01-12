/* createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
 */
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>INDEX SAYFASINA HOSGELDINIZ</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>HAKKIMDA SAYFASINA HOSGELDINIZ</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>ILETISIM SAYFASINA HOSGELDINIZ</h2>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h2>404 SAYFA BULUNAMADI</h2>");
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`sunucu port ${port} de başlatıldı.`);
});
