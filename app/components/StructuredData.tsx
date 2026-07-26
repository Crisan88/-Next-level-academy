const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Next Level Academy",
  alternateName: "Next Level Academy Fußballschule",
  url: "https://nextlevelacademy-fussball.de",
  logo: "https://nextlevelacademy-fussball.de/logo.png",
  description:
    "Professionelles Fußballtraining für Kinder von 7 bis 13 Jahren in Muhr am See mit individueller Förderung, kleinen Gruppen und kostenloser Anmeldung.",
  email: "craulc88@yahoo.com",
  telephone: "+49 1590 6419166",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muhr am See",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "Place",
    name: "Muhr am See, Deutschland",
  },
  sameAs: ["https://wa.me/4915906419166", "https://nextlevelacademy-fussball.de"],
  sport: "Association Football",
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
