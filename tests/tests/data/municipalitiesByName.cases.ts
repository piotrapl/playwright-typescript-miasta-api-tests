// tests/tests/data/municipalitiesByName.cases.ts
// przypadki testowe - wyszukiwanie miast po nazwie
// eksportujemy tablicę - zawiera obiekty z nazwami miast
// nowe przypadki można dodawać do tej tablicy
// 'as const' - ma zapewnić niezmienność tablicy

export const municipalitiesByNameCases = [
  { name: "Lodz" },
  { name: "Lublin" }
] as const;