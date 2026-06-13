import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shree Ram Classes | Patna's Best Arts & Humanities Coaching Institute",
  description: "Learn directly from Alok Sir at Shree Ram Classes in Mahendru, Patna. Premium classroom sessions, expert notes, test series, and mentorship for Bihar Board Class 11 & 12 Arts.",
  keywords: [
    "Best Arts Coaching in Patna",
    "Arts Coaching in Mahendru",
    "Class 12 Arts Coaching Patna",
    "Class 11 Arts Coaching Patna",
    "Humanities Coaching Patna",
    "Best Arts Teacher in Patna",
    "Alok Sir Arts Classes",
    "Patna Arts Coaching Institute"
  ],
  metadataBase: new URL("https://shreeramclassespatna.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shree Ram Classes | Patna's Leading Arts Coaching Institute",
    description: "Join hundreds of students learning directly from Alok Sir through structured notes, digital classrooms, and result-oriented coaching in Patna.",
    url: "https://shreeramclassespatna.in",
    siteName: "Shree Ram Classes",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Shree Ram Classes Patna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://shreeramclassespatna.in/#organization",
        "name": "Shree Ram Classes",
        "url": "https://shreeramclassespatna.in",
        "logo": "https://shreeramclassespatna.in/logo.png",
        "description": "Patna's leading Arts coaching institute for Class 11 and 12 Bihar Board and Humanities students.",
        "founder": {
          "@type": "Person",
          "name": "Alok Sir"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3rd Floor, Bhukkad Restaurant Building, Near Mahendru Post Office, Ashok Rajpath, Mahendru",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800006",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-77799-77725",
          "contactType": "admissions",
          "areaServed": "IN",
          "availableLanguage": ["Hindi", "English"]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://shreeramclassespatna.in/#localbusiness",
        "name": "Shree Ram Classes",
        "image": "https://shreeramclassespatna.in/logo.png",
        "telephone": "+91 77799 77725",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3rd Floor, Bhukkad Restaurant Building, Near Mahendru Post Office, Ashok Rajpath, Mahendru",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800006",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.6202",
          "longitude": "85.1765"
        },
        "url": "https://shreeramclassespatna.in",
        "priceRange": "₹₹",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
