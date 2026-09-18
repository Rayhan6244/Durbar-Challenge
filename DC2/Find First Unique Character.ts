function findFirstUniqueChar(s: string): string | number {
  // TODO: Implement this function
  const charCount: { [key: string]: number } = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return -1;
}
