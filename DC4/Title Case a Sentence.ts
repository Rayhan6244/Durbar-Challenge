function titleCaseSentence(str: string): string {
  // TODO: Implement this function
  return str
    .trim()
    .split(/\s+/)
    .filter(word => word.length>0)
    .map(word=> word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase())
    .join(" ");
}
