const sharp = require('sharp');
 
const sizes = [
  36,
  48,
  60,
  72,
  76,
  96,
  120,
  128,
  144,
  152,
  152,
  180,
  192,
  256,
  512
];

sizes.forEach(size => {
  sharp('public/icon.png')
  .resize(size, size)
  .toFile(`public/icons/icon${size}.png`, (error, result) => {
    if (error) throw new Error(error);

    console.log(result);
  });
});

