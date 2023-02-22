const button = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const textLetter = document.getElementById('carta-texto');
const groups = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotate: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'],
};

function getRandomClass(group) {
  const classes = groups[group];
  return classes[Math.floor(Math.random() * classes.length)];
}

function applyRandomClasses(element) {
  for (let index = 0; index < element.children.length; index += 1) {
    const randomStyleClass = getRandomClass('style');
    const randomSizeClass = getRandomClass('size');
    const randomRotateClass = getRandomClass('rotate');
    const randomSkewClass = getRandomClass('skew');

    const classes = [randomStyleClass, randomSizeClass, randomRotateClass, randomSkewClass];
    const classString = classes.join(' ');
    element.children[index].className = classString;
  }
}

button.addEventListener('click', () => {
  const letterContent = textLetter.value.trim();
  if (letterContent === '') {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    textLetter.focus();
    return;
  }
  const words = letterContent.split(' ');
  const newLetter = words.map((word) => `<span>${word.trim()}</span>`).join(' ');
  letter.innerHTML = newLetter;
  applyRandomClasses(letter);
  textLetter.value = letterContent;
  const spans = document.querySelectorAll('span');
  spans.forEach((span) => {
    span.addEventListener('click', handleSpanClick);
  });
  const wordCount = words.length;
  const counter = document.getElementById('carta-contador');
  counter.innerText = wordCount;
});

function handleSpanClick() {
  const randomStyleClass = getRandomClass('style');
  const randomSizeClass = getRandomClass('size');
  const randomRotateClass = getRandomClass('rotate');
  const randomSkewClass = getRandomClass('skew');

  const classes = [randomStyleClass, randomSizeClass, randomRotateClass, randomSkewClass];
  const classString = classes.join(' ');

  this.className = classString;
}
