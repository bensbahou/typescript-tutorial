const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) =>
  console.log(input.value ? input.value : "no value", index)
);