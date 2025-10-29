import React from 'react'
import { certifications } from '../data/certifications'

const Certifications: React.FC = () => {
  const getLogoClass = (provider: string): string => {
    const baseClasses = "h-20 object-contain transition-transform hover:scale-110"
    
    // Gemini logo needs to be larger
    if (provider === "Gemini") {
      return `${baseClasses} scale-150`
    }
    
    return baseClasses
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Certified & Trusted
          </h2>
          <p className="text-lg text-gray-600">
            We are certified by leading security brands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 flex items-center justify-center h-24">
                <img
                  src={cert.logo}
                  alt={`${cert.provider} Logo`}
                  className={getLogoClass(cert.provider)}
                  onError={(e) => {
                    console.error(`Failed to load logo: ${cert.provider}`)
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {cert.provider}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
