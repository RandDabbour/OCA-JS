const textBlock = document.getElementById("textBlock");
const originalText = textBlock.innerHTML;

// Function to highlight words that exceed 8 characters
const highlightLongWords = () => {
    const wordsArray = originalText.split(' ');
    const highlightedWords = wordsArray.map(word => {
        if (word.length > 8) {
            return `<span class="highlight">${word}</span>`;
        }
        return word;
    }).join(' ');
    textBlock.innerHTML = highlightedWords;
};

// Function to count the total number of words
const countTotalWords = () => {
    const wordsArray = originalText.split(' ');
    const totalWords = wordsArray.length;
    document.getElementById('wordCount').innerHTML += totalWords;
};

// Execute the functions to apply the effects
highlightLongWords();
countTotalWords();