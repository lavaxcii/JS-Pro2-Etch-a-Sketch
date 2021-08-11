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
  xAxis.style.gridTemplateColumns = `repeat(${columns}, 0fr)`;
  const calculateBoardSize = rows * columns;
  console.log(calculateBoardSize);
  for (let i = calculateBoardSize; i > 0; i--) {
    const createBoardPixels = document.createElement('div');
    createBoardPixels.classList.add('grid-item');
    xAxis.appendChild(createBoardPixels);
  };
};

resizeButton.addEventListener('click', calculateBoard);
