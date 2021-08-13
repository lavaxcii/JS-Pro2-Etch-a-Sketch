function colorBoardEnable() {
  const gridItemsColoring = document.querySelectorAll('div');
  gridItemsColoring.forEach((item) => {
    let opacityValue = 0;
  
    function rgbRng() {
      let randomRgbNr = Math.floor(Math.random() * 255) + 0;
      return randomRgbNr;
    };
    function opacityUp() {
      if (opacityValue < 100) {
        return opacityValue += 10
      };
    };
  
    item.addEventListener('mouseenter', () => {
      if (item.classList.contains('grid-item')) {
        if (item.classList.contains('colored')) {
          if (item.style.backgroundColor === 'inherit') {
            item.style.backgroundColor = `rgb(${rgbRng()}, ${rgbRng()}, ${rgbRng()})`;
            opacityValue = 0;
          };
          item.style.opacity = `${opacityUp()}%`;
          //if i want it to make it all black per assigment then it's needed on each pass for rgb value decreases for ¬10% - but i like it colorfull as it is now ^^
          return;
        };
        item.style.transition = '1s ease 0s';
        item.style.backgroundColor = `rgb(${rgbRng()}, ${rgbRng()}, ${rgbRng()})`;
        item.style.opacity = `${opacityUp()}%`;
        item.classList.add('colored');
      };
    });
  });
};

function makeIntroGrid() {
  const xAxisIntroGrid = document.querySelector('.xAxis');
  xAxisIntroGrid.style.gridTemplateColumns = `repeat(16, 1fr)`;
  const calculateBoardSize = 16 * 16;
  for (let i = calculateBoardSize; i > 0; i--) {
    const createBoardPixels = document.createElement('div');
    createBoardPixels.classList.add('grid-item');
    xAxisIntroGrid.appendChild(createBoardPixels);
  };
};
makeIntroGrid();
colorBoardEnable();

const resizeButton = document.querySelector('.resizeBoard');

function calculateBoard() {
  const xAxis = document.querySelector('.xAxis');

  const gridItems = document.querySelectorAll('div');
  gridItems.forEach((item) => {
    if (item.classList.contains('grid-item')) {
      item.remove();
    } else {
      return;
    };
  });

  const rows = document.querySelector('#nrrows').value;
  const columns = document.querySelector('#nrcolumns').value;
  if (rows > 100 || columns > 100) {
    //* Make tooltip appear?
    return;
  };
  xAxis.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  const calculateBoardSize = rows * columns;
  console.log(calculateBoardSize);
  for (let i = calculateBoardSize; i > 0; i--) {
    const createBoardPixels = document.createElement('div');
    createBoardPixels.classList.add('grid-item');
    xAxis.appendChild(createBoardPixels);
  };
  colorBoardEnable();

  resizeButton.classList.add('highlight');
  setTimeout(() => {
    resizeButton.classList.remove('highlight');
  }, 1500);
};
resizeButton.addEventListener('click', calculateBoard);

const clearButton = document.querySelector('.clearBoard');

function clearBoard() {
  const gridItemsColoring = document.querySelectorAll('div');
  gridItemsColoring.forEach((item) => {
    if(item.classList.contains('colored')) {
      item.style.backgroundColor = 'inherit';
      item.style.border = 'outset 1px black';
      item.style.opacity = '1';
    };
  });
  clearButton.classList.add('highlight');
  setTimeout(() => {
    clearButton.classList.remove('highlight');
  }, 1500);
};

clearButton.addEventListener('click', clearBoard);
