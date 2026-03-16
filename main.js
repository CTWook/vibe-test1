const drawButton = document.getElementById('draw-button');
const numbersContainer = document.getElementById('numbers');

drawButton.addEventListener('click', () => {
    generateLottoNumbers();
});

function generateLottoNumbers() {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.textContent = number;
        ball.style.backgroundColor = getBallColor(number);
        numbersContainer.appendChild(ball);
    });
}

function getBallColor(number) {
    if (number <= 10) {
        return '#f2b705'; // Yellow
    } else if (number <= 20) {
        return '#05a6f2'; // Blue
    } else if (number <= 30) {
        return '#f24405'; // Red
    } else if (number <= 40) {
        return '#8c8c8c'; // Gray
    } else {
        return '#22a603'; // Green
    }
}
