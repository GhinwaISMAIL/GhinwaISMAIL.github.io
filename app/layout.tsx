import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghinwaismail.github.io"),
  title: "Ghinwa Ismail | Telecommunications Researcher & Engineer",
  description:
    "Career portfolio of Ghinwa Ismail, a telecommunications researcher and engineer with experience in network experimentation, data science, distributed communication systems, and teaching.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "telecommunications researcher",
    "telecommunications engineer",
    "network experimentation",
    "applied data science",
    "distributed communication systems",
    "embedded systems",
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
    title: "Ghinwa Ismail | Telecommunications Researcher & Engineer",
    description:
      "Telecommunications research and engineering across network experimentation, data science, distributed systems, and teaching.",
    url: "/",
    siteName: "Ghinwa Ismail",
    type: "website",
    images: [
      {
        url: "/assets/images/social/og-career.png",
        width: 1731,
        height: 909,
        alt: "Ghinwa Ismail — Telecommunications Researcher and Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghinwa Ismail | Telecommunications Researcher & Engineer",
    description:
      "Telecommunications research and engineering across network experimentation, data science, distributed systems, and teaching.",
    images: ["/assets/images/social/og-career.png"],
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
    jobTitle: "Telecommunications Researcher and Engineer",
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
      "Telecommunications engineering",
      "Network experimentation",
      "Applied data science",
      "Distributed communication systems",
      "Embedded systems",
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
