import "./globals.css";

export const metadata = {
  title: "LegalLink Uganda — AI research and drafting for Ugandan advocates",
  description:
    "LegalLink is an AI legal assistant built on Ugandan law. Research, draft, and review with full ULII case law, current statutes, and your firm's own precedent — in one workspace.",
  metadataBase: new URL("https://legallink-ug.vercel.app"),
  openGraph: {
    title: "LegalLink Uganda — AI research and drafting for Ugandan advocates",
    description:
      "Research, draft, and review with full ULII case law, current statutes, and your firm's own precedent — in one workspace.",
    siteName: "LegalLink Uganda",
    locale: "en_UG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LegalLink Uganda",
    description: "AI research and drafting for Ugandan advocates.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
