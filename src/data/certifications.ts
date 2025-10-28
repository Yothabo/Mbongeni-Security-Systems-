export interface Certification {
  id: number;
  name: string;
  provider: string;
  logo: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Hikvision Certified",
    provider: "Hikvision",
    logo: "./certifications/hikvision.png"  // Use ./ for current directory
  },
  {
    id: 2,
    name: "Centurion Systems",
    provider: "Centurion",
    logo: "./certifications/centurion.png"  // Use ./ for current directory
  },
  {
    id: 3,
    name: "Gemini Certified",
    provider: "Gemini",
    logo: "./certifications/gemini.png"  // Use ./ for current directory
  }
];
