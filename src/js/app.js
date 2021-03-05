function redrawPosition(position) {
  const charEl = document.querySelector('.character');
  const cellEl = Array.from(document.getElementsByClassName('cell'))[position];
  if (!charEl) {
    const newCharEl = document.createElement('div');
    newCharEl.classList.add('character');

    cellEl.appendChild(newCharEl);
    return;
  }

  cellEl.appendChild(charEl);
}

function getNewPosition() {
  const charEl = document.querySelector('.character');
  if (!charEl) {
    return Math.round(Math.random() * (4 ** 2 - 1));
  }
  const cellEl = Array.from(document.getElementsByClassName('cell')).indexOf(charEl.parentElement);
  const charPosition = cellEl;
  let newPosition = charPosition;
  while (newPosition === charPosition) {
    newPosition = Math.round(Math.random() * (4 ** 2 - 1));
  }
  return newPosition;
}

setInterval(() => { redrawPosition(getNewPosition()); }, 1000);
