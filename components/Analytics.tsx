// components/Analytics.tsx
// Replace G-XXXXXXXXXX with your real Google Analytics Measurement ID
// Get it free at: analytics.google.com → Admin → Data Streams → your site

import Script from "next/script";

const GA_ID = "G-W60WRRTT7X"; // ← replace this

export default function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}