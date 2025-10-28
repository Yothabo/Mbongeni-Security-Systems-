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
    logo: "/certifications/hikvision.png"
  },
  {
    id: 2,
    name: "Centurion Systems",
    provider: "Centurion", 
    logo: "/certifications/centurion.png"
  },
  {
    id: 3,
    name: "Gemini Certified",
    provider: "Gemini",
    logo: "/certifications/gemini.png"
  }
];
