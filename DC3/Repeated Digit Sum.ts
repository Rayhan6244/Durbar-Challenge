function repeatedDigitSum(n: number): number {
  // TODO: Implement this function
    if (n === 0) return 0;
    return n % 9 === 0 ? 9 : n % 9;
}
