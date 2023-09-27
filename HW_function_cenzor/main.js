function censor() {
    // Создаем массив для хранения пар слов
    const wordPairs = [];
    
    // Возвращаемая функция
    return function (word, replacement) {
        // Если передано 2 параметра, добавляем пару слов в массив
        if (arguments.length === 2) {
            wordPairs.push([word, replacement]);
        } else if (arguments.length === 1) {
            // Если передан 1 параметр, заменяем слова согласно массиву
            let text = word;
            for (const pair of wordPairs) {
                const regex = new RegExp(pair[0], 'g');
                text = text.replace(regex, pair[1]);
            }
            return text;
        }
    };
}

// Создаем функцию censor
const changeScene = censor();

// Добавляем пары слов в массив
changeScene('PHP', 'JS');
changeScene('backend', 'frontend');

// Заменяем слова в тексте согласно массиву
const newText = changeScene('PHP is the most popular programming language for backend web-development');
console.log(newText);
