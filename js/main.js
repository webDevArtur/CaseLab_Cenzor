const wordList = document.getElementById('listWord'); // Элемент для вывода списка слов

// Массив для хранения слов
let censorWords = [];

// Обработчик для кнопки "Add"
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    const wordInput = document.getElementById('word');
    const euphemismInput = document.getElementById('euphemism');
    const word = wordInput.value.trim();
    const euphemism = euphemismInput.value.trim();

    if (word && euphemism) {
        censorWords.push({ word, euphemism });
        updateWordList(); // Обновление списка слов
        wordInput.value = ''; // Очистка инпута
        euphemismInput.value = ''; // Очистка инпута
    }
});

// Функция для обновления списка слов
function updateWordList() {
    wordList.innerHTML = '';
    censorWords.forEach((pair) => {
        const wordItem = document.createElement('div');
        wordItem.textContent = `${pair.word} => ${pair.euphemism}`;
        wordList.appendChild(wordItem);
    });
}


const textArea = document.getElementById('textInfo');
const cenzorButton = document.getElementById('cenzor');

cenzorButton.addEventListener('click', function () {
    let newText = textArea.value;

    // Заменяем слова в тексте согласно списку слов
    censorWords.forEach((pair) => {
        const regex = new RegExp(pair.word, 'g');
        newText = newText.replace(regex, pair.euphemism);
    });

    textArea.value = newText;
});
