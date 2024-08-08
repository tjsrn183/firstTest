export default function jobsplit(text) {
  if (!text) {
    return ['', ''];
  }
  const parts = text.split(/ is hiring /i);
  return parts.length === 2 ? parts : [text, ''];
}
