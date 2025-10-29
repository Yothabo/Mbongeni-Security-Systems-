// Import certification logos as modules
import hikvisionLogo from '../assets/certifications/hikvision.png'
import centurionLogo from '../assets/certifications/centurion.png'
import geminiLogo from '../assets/certifications/gemini.png'

export interface Certification {
  id: number
  name: string
  provider: string
  logo: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Hikvision Certified",
    provider: "Hikvision",
    logo: hikvisionLogo
  },
  {
    id: 2,
    name: "Centurion Systems",
    provider: "Centurion",
    logo: centurionLogo
  },
  {
    id: 3,
    name: "Gemini Certified",
    provider: "Gemini",
    logo: geminiLogo
  }
]
