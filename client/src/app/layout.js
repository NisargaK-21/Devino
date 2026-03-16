import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Devino - Learn. Build. Deploy.",
  description: "Stage-based web development learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Special+Elite&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: "#0a0000", minHeight: "100vh" }}>
        <Navbar />
        <main>{children}</main>
        <footer style={{ borderTop: "1px solid #8b0000", padding: "20px", textAlign: "center", color: "#666", fontFamily: "Special Elite, cursive" }}>
          2024 Devino - Build real projects. Pass AI validation.
        </footer>
      </body>
    </html>
  );
}
