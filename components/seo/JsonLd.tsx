import { portfolio } from "@/data/portfolio";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": portfolio.personal.name,
    "alternateName": portfolio.personal.shortName,
    "jobTitle": portfolio.personal.title,
    "worksFor": {
      "@type": "Organization",
      "name": "Softvence, Betopia Group",
      "location": "Dhaka, Bangladesh"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "North South University"
    },
    "url": portfolio.personal.siteUrl,
    "sameAs": [
      portfolio.personal.linkedin,
      portfolio.personal.github
    ],
    "email": portfolio.personal.email,
    "telephone": portfolio.personal.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "knowsAbout": portfolio.skillCategories.flatMap(c => c.skills.map(s => s.name)),
    "description": portfolio.personal.bio
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2026-01-01T00:00:00Z",
    "dateModified": new Date().toISOString(),
    "mainEntity": {
      "@type": "Person",
      "name": portfolio.personal.name,
      "alternateName": portfolio.personal.shortName,
      "jobTitle": portfolio.personal.title,
      "description": portfolio.personal.bio,
      "image": `${portfolio.personal.siteUrl}/images/profile.jpg`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
