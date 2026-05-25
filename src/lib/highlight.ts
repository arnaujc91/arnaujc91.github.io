export interface HighlightPart {
  text: string;
  highlight: boolean;
}

export function makeHighlighter(terms: string[]) {
  const escapedTerms = terms
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const highlightPattern = new RegExp(`(${escapedTerms.join("|")})`, "gi");
  const highlightSet = new Set(terms.map((term) => term.toLowerCase()));

  return function highlightText(text: string): HighlightPart[] {
    return text.split(highlightPattern).filter(Boolean).map((part) => ({
      text: part,
      highlight: highlightSet.has(part.toLowerCase()),
    }));
  };
}
