export function TruncateText (text: string, maxLength: number = 200) {
  if(text.length < maxLength) {
    return text;
  }

  const truncatedText = text.slice(0, maxLength);

  const lastChar = truncatedText.slice(-1);

  if (lastChar !== '.') {
    return truncatedText.slice(0, maxLength - 3) + '...';
  }

  return truncatedText + '...';
}