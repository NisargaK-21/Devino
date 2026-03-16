"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#050000",
        borderBottom: "1px solid #8b0000",
        boxShadow: "0 4px 15px rgba(255,0,0,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <h2
          style={{
            fontFamily: "Creepster, cursive",
            color: "#ff2020",
            letterSpacing: "3px",
            fontSize: "1.6rem",
            cursor: "pointer",
          }}
        >
          DEVINO
        </h2>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "36px",
            alignItems: "center",
            fontSize: "0.95rem",
          }}
        >
          <NavItem href="/" label="Home" />
          <NavItem href="/dashboard" label="Dashboard" />
          <NavItem href="/projects" label="Projects" />
        </div>

        {/* CTA Button */}
        <button
          style={{
            background: "#cc0000",
            border: "none",
            color: "white",
            padding: "10px 24px",
            fontFamily: "Creepster, cursive",
            letterSpacing: "2px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.boxShadow = "0 0 15px #ff0000")
          }
          onMouseOut={(e) =>
            (e.target.style.boxShadow = "none")
          }
        >
          GET STARTED
        </button>
      </div>
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      style={{
        color: "#ccc",
        textDecoration: "none",
        position: "relative",
        fontFamily: "Special Elite, cursive",
        letterSpacing: "2px",
        transition: "0.3s",
      }}
    >
      {label}
    </Link>
  );
}