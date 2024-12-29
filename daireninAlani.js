const arguments = process.argv.slice(2);

function daireninAlani(r) {
  let alan = Math.PI * r * r;

  console.log(
    `Yarıçapı ${r} mm olan dairenin alanı: ${alan.toFixed(
      2
    )} mm2 şeklinde olmalıdır`
  );
}

daireninAlani(arguments[0] * 1);
