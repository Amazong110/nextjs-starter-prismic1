import "../styles/globals.css";

import { Inter, Libre_Baskerville } from "next/font/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--libre-baskerville",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${libre_baskerville.className}`}
    >
      <body className="overflow-x-hidden antialiased">
        <main>
          {process.env.NODE_ENV === "development" && (
            <div
              style={{
                background: "#04D99D",
                padding: "1rem",
                textAlign: "center",
                fontSize: "0.85rem",
                color: "#fff",
              }}
            >
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'black' }}>Call Us 0123456789</span>
            <button style={{ 
              backgroundColor: 'red', 
              color: 'white', 
              border: 'none', 
              padding: '0.5rem 1rem', 
              cursor: 'pointer' 
            }}>Book A Free Assessment</button>
          </div>
            </div>
          )}
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </main>
      </body>
    </html>
  );
}
