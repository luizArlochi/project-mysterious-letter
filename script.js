const button = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

button.addEventListener('click', () => {
  const letterContet = document.getElementById('carta-texto').value;
  const words = letterContet.split(' ');
  const spanWords = words.map((word) => `<span> ${word} </span>`);
  const newLetter = spanWords.join(' ');
  letter.innerHTML = newLetter;
});
