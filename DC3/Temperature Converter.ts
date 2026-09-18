function convertTemperature(value: number, unit: 'C' | 'F'): number {
  // TODO: Implement the temperature conversion
  let result: number;

    if (unit === 'C') {
        result = (value * 9 / 5) + 32;
    } else {
        result = (value - 32) * 5 / 9;
    }

    return Number(result.toFixed(2));
}
