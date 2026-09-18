function countEvenOdd(numbers: number[]): { even: number; odd: number } {
  // TODO: Implement this function
  return numbers.reduce<CountResult>(
        (acc, num) => {
            if (num % 2 === 0) {
                acc.even++;
            } else {
                acc.odd++;
            }
            return acc;
        },
        { even: 0, odd: 0 }
    );
}
