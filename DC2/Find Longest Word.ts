function findLongestWord(sentence: string): string {
  // TODO: Implement this function
  const words = sentence.match(/[a-zA-Z0-9]+/g);
    
    if (!words) return "";

    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}
