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
};

resizeButton.addEventListener('click', calculateBoard);
