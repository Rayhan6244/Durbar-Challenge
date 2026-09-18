function findSecondLargestUnique(numbers: number[]): number | null {
  // TODO: Implement this function
  const uniqueNumbers = Array.from(new Set(numbers));

    if (uniqueNumbers.length < 2) {
        return null;
    }

    uniqueNumbers.sort((a, b) => b - a);

    return uniqueNumbers[1];
  
}
