function convertToCamelCase(sentence) {
  // TODO: Implement this function
  const words = sentence.trim().split(/\s+/);
    if (words.length === 0 || words[0] === '') return '';

    return words.map((word, index) => {
        const lower = word.toLowerCase();
        if (index === 0) {
            return lower;
        }
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }).join('');
}
