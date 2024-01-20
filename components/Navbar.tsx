"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.hash);

      const handleHashChange = () => {
        setPathname(window.location.hash);
      };

      window.addEventListener("hashchange", handleHashChange);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 ">
      <Link href="/">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo-crna.png"
            alt="logo"
            width={10}
            height={10}
            style={{
              marginRight: "15px",
              borderRadius: "50%",
              width: "10%",
              height: "auto",
            }}
          />

          <p className="m-0 regular-16 ">QAZA AGENCY</p>
        </div>
      </Link>

      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <div className="hover:font-bold">POČETNA</div>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <div className="hover:font-bold">USLUGE</div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div className="hover:font-bold">KONTAKT</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
