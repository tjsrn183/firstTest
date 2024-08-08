export default function truncate(text) {
  if (!text) {
    return '';
  }

  if (text.length > 15) {
    return text.slice(0, 13) + '...';
  }
  return text;
}
