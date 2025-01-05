const circleArea = (r) => {
  const area = Math.PI * r * r;
  console.log(area.toFixed(2));
};

const circleCircumference = (r) => {
  const circumference = Math.PI * 2 * r;
  console.log(circumference.toFixed(2));
};

module.exports = {
  circleArea,
  circleCircumference,
};
