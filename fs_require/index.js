global.console.log("log yazıldı");

global.console.log(__dirname);
// Prints: /Users/mjr
// console.log(path.dirname(__filename));
// Prints: /Users/mjr

global.setTimeout(() => {
  console.log("3 sn bekle");
}, 3000);
