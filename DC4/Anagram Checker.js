function isAnagram(s1, s2) {
  const cleanS1 = s1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanS2 = s2.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    if (cleanS1.length !== cleanS2.length) return false;
    
    return cleanS1.split('').sort().join('') === cleanS2.split('').sort().join('');
}
