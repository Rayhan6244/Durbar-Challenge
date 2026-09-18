function compressCharacters(str: string): string {
  if (!str) return "";

    let compressed = "";
    let i = 0;

    while (i < str.length) {
        let char = str[i];
        let count = 0;

        while (i < str.length && str[i] === char) {
            count++;
            i++;
        }
        compressed += char + (count > 1 ? count : "");
    }

    return compressed;
}
