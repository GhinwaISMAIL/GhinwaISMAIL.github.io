import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghinwaismail.github.io"),
  title: "Ghinwa Ismail | Network Digital Twins for 5G Systems",
  description:
    "Research portfolio of Ghinwa Ismail, developing trustworthy Network Digital Twins for 5G through trace-driven traffic generation, reproducible testbeds, and experimental validation.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Network Digital Twins",
    "5G Standalone",
    "machine learning for networks",
    "trace-driven traffic modelling",
    "synthetic traffic generation",
    "OpenAirInterface",
    "network testbeds",
    "reproducible experimentation",
    "ON/OFF burst models",
    "traffic reconstruction",
    "KPI measurement",
    "KPI prediction",
    "uncertainty estimation",
    "what-if analysis",
  ],
  icons: {
    icon: [
      { url: "/assets/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/assets/icons/favicon-32.png",
    apple: "/assets/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ghinwa Ismail | Network Digital Twins for 5G Systems",
    description:
      "Developing trustworthy Network Digital Twins for 5G through realistic traffic generation, reproducible testbeds, and experimental validation.",
    url: "/",
    siteName: "Ghinwa Ismail",
    type: "website",
    images: [
      {
        url: "/assets/images/social/og.png",
        width: 1731,
        height: 909,
        alt: "Ghinwa Ismail — Network Digital Twins, 5G, and Machine Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghinwa Ismail | Network Digital Twins for 5G Systems",
    description:
      "Developing trustworthy Network Digital Twins for 5G through realistic traffic generation, reproducible testbeds, and experimental validation.",
    images: ["/assets/images/social/og.png"],
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://ghinwaismail.github.io/",
  mainEntity: {
    "@type": "Person",
    name: "Ghinwa Ismail",
    url: "https://ghinwaismail.github.io/",
    image: "https://ghinwaismail.github.io/assets/images/profile/portrait-highres.jpg",
    jobTitle: "PhD Researcher in Telecommunications",
    affiliation: {
      "@type": "Organization",
      name: "ICube Laboratory, University of Strasbourg",
    },
    sameAs: [
      "https://github.com/GhinwaISMAIL",
      "https://www.linkedin.com/in/ghinwa-ismail-a14a65249",
      "https://www.researchgate.net/profile/Ghinwa-Ismail-4",
      "https://scholar.google.com/citations?user=uCI4JNcAAAAJ&hl=en",
    ],
    knowsAbout: [
      "Network Digital Twins",
      "5G Standalone networks",
      "Trace-driven traffic modelling",
      "Synthetic traffic generation",
      "Reproducible network experimentation",
      "OpenAirInterface",
      "KPI prediction",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
