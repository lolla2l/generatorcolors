const colors = [
    '#FF5733', '#C70039', '#17261D', 
    '#33FF57', '#33C7FF', '#3390FF', 
    '#FFC300', '#581845', '#DAF7A6', 
    '#FF33A6', '#000000', '#FFFFFF',
    '#7442C8', '#9E9E9E', '#465945',
    '#534B4F', '#662E38', '#911E42', 
    '#D49BBA', '#CDA4DE', '#FFDE5A',
    '#FCD247', '#AD7F00', '#C5DB32'
];

function getCombinations(array, comboLength) {
    const result = [];

    const f = function(prefix, start) {
        if (prefix.length === comboLength) {
            result.push(prefix);
            return;
        }
        for (let i = start; i < array.length; i++) {
            f(prefix.concat(array[i]), i + 1);
        }
    };

    f([], 0);
    return result;
}

function generateColorBoxes() {
    const colorContainer = document.getElementById('color-combinations');
    colorContainer.innerHTML = ''; // Очистка предыдущих цветов

    const combinations = getCombinations(colors, 3); // Генерация всех комбинаций по 3 цвета
    const randomIndex = Math.floor(Math.random() * combinations.length);
    const selectedColors = combinations[randomIndex];

    selectedColors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color; // Отображение цвета в формате HEX
        colorContainer.appendChild(colorBox);
    });
}

// Генерация начальных комбинаций
generateColorBoxes();

// Добавление обработчика события для кнопки
document.getElementById('generate-button').addEventListener('click', generateColorBoxes);
