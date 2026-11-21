export const FOCUS_COUNTRIES = [
  "Germany",
  "Austria",
  "Netherlands",
  "Belgium",
  "Luxembourg",
] as const;

export const OTHER_COUNTRIES = [
  "France",
  "Switzerland",
  "Italy",
  "Poland",
  "Czechia",
  "Denmark",
  "Sweden",
  "Norway",
  "Finland",
  "Spain",
  "Portugal",
  "Ireland",
  "United Kingdom",
  "Other",
] as const;

export const COUNTRIES = [...FOCUS_COUNTRIES, ...OTHER_COUNTRIES] as const;

export const MATERIALS = [
  { value: "DC01", label: "DC01 cold-rolled steel" },
  { value: "S235JR", label: "S235JR" },
  { value: "galvanized", label: "Galvanized steel" },
  { value: "304", label: "Stainless 304" },
  { value: "316", label: "Stainless 316" },
  { value: "aluminium-5052", label: "Aluminium 5052" },
] as const;

export type MaterialValue = (typeof MATERIALS)[number]["value"];

export function materialLabel(value: string): string {
  const found = MATERIALS.find((item) => item.value === value);
  return found?.label ?? value;
}
