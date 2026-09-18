function isPalindrome(str: string): boolean {
  // TODO: Implement this function
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const reversed = cleaned.split('').reverse().join('');
    
    return cleaned === reversed;
}
