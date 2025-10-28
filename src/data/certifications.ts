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
    logo: "certifications/hikvision.png"  // Remove leading slash for Vercel
  },
  {
    id: 2,
    name: "Centurion Systems",
    provider: "Centurion",
    logo: "certifications/centurion.png"  // Remove leading slash for Vercel
  },
  {
    id: 3,
    name: "Gemini Certified",
    provider: "Gemini",
    logo: "certifications/gemini.png"  // Remove leading slash for Vercel
  }
];
