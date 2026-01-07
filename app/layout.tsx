import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Lit-Hosting - Fast & Reliable Web Hosting | Germany-Based",
  description:
    "Powerful hosting solutions for your websites and applications. Fast, reliable hosting infrastructure based in Germany with 99.9% uptime guarantee.",
  keywords: "web hosting, domain hosting, VPS, gameserver, storage, german hosting, reliable hosting",
  openGraph: {
    title: "Lit-Hosting - Fast & Reliable Web Hosting",
    description: "Premium hosting solutions for websites and applications with German infrastructure",
    url: "https://lit-hosting.de",
    siteName: "Lit-Hosting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lit-Hosting Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lit-Hosting - Fast & Reliable Web Hosting",
    description: "Premium hosting solutions with German infrastructure",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lit-hosting.de",
  },
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#3cdd4a",
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="style" href="/_next/static/css/main.css" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="//cdn.vercel-insights.com" />
        <link rel="preconnect" href="//cdn.vercel-insights.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lit-Hosting",
              url: "https://lit-hosting.de",
              logo: "https://lit-hosting.de/icon.svg",
              description: "Premium hosting solutions with German infrastructure",
              address: {
                "@type": "PostalAddress",
                addressCountry: "DE",
              },
              sameAs: [
                "https://facebook.com/lithosting",
                "https://twitter.com/lithosting",
                "https://instagram.com/lithosting",
                "https://linkedin.com/company/lithosting",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Lit-Hosting",
              url: "https://lit-hosting.de",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://lit-hosting.de/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
