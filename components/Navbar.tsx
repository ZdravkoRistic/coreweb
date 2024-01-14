import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <Image
          src="/coreweb-logo.png"
          alt="logo"
          width={10}
          height={10}
          style={{
            marginRight: "10px",
            borderRadius: "50%",
            width: "15%",
            height: "auto",
          }}
        />
        <p style={{ margin: "0" }}>CoreWeb AGENCY</p>
      </a>

      <ul className="flex gap-4">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
