export function cleanText(rawText: unknown): string {
    if (typeof rawText !== 'string') {
      throw new Error('Le texte brut doit être une chaîne de caractères');
    }
  
    // Exemple de nettoyage : supprimer les espaces en trop, les retours à la ligne inutiles, etc.
    return rawText
      .replace(/\r\n|\r|\n/g, ' ')   // remplace les retours à la ligne par un espace
      .replace(/\s+/g, ' ')          // remplace les espaces multiples par un seul
      .trim();
  }
  