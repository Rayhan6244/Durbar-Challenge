function reverseEachWord(str: string): string {
  // TODO: Implement this function
  return str
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}
