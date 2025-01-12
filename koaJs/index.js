/* koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım. */

const Koa = require("koa");
const app = new Koa();
// response
app.use((ctx) => {
  const url = ctx.request.url;
  console.log(url);

  if (url === "/") {
    ctx.status = 200;
    ctx.body = "<h1>INDEX SAYFASINA HOSGELDINIZ</h1>";
  } else if (url === "/about") {
    ctx.status = 200;
    ctx.body = "<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>";
  } else if (url === "/contact") {
    ctx.status = 200;
    ctx.body = "<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>";
  } else {
    ctx.status = 404;
    ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>";
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu port ${port} de çalışıyor.`);
});
