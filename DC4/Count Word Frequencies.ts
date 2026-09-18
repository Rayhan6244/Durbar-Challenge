function countWordFrequencies(sentence: string): Record<string, number> {
  // TODO: Implement this function
const frequencyMap: Record<string, number> = {};

    const words = sentence.toLowerCase().match(/[a-z0-9]+/g);

    if (!words) return frequencyMap;

    for (const word of words) {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }

    return frequencyMap;
}
