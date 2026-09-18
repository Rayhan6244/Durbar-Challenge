function truncateString(str: string, maxLength: number): string {
  // TODO: Implement this function
  if(str.length <= maxLength){
    return str;
  }
  if(maxLength<= 3){
    return "...";
  }
  return str.slice(0, maxLength-3)+"...";
}
