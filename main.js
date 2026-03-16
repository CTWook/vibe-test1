const drawButton = document.getElementById('draw-button');
const numbersContainer = document.getElementById('numbers');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

function updateToggleUI(isDark) {
    const icon = darkModeToggle.querySelector('.icon');
    const text = darkModeToggle.querySelector('.text');
    if (isDark) {
        icon.textContent = '🌙';
        text.textContent = 'Dark Mode';
    } else {
        icon.textContent = '☀️';
        text.textContent = 'Light Mode';
    }
}

// Check for saved dark mode preference
const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
if (isDarkModeEnabled) {
    body.classList.add('dark-mode');
}
updateToggleUI(isDarkModeEnabled);

darkModeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    updateToggleUI(isDark);
});

drawButton.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numbersContainer.appendChild(numberElement);
    }
}
