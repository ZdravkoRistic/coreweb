import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="flexCenter mb-24  ">
      <div className="padding-container max-container flex w-full flex-col gap-14 ">
        <div className="flex ">
          <Image
            src="/logo-crna.png"
            alt="logo"
            width={0}
            height={0}
            style={{
              borderRadius: "50%",
              width: "6%",
              height: "auto",
            }}
          />
        </div>
        <div className="flex flex-col items-start justify-center  md:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              {FOOTER_LINKS.map((columns, columnIndex) => (
                <div key={columnIndex}>
                  <h2 className="font-bold">{columns.title}</h2>
                  <ul className="regular-16 flex flex-col gap-4 text-gray-900 py-6 ">
                    {columns.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {columns.title === "NAŠI PARTNERI" ? (
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link}
                          </a>
                        ) : (
                          <Link href="/" key={link}>
                            {link}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                      href="/"
                      key={link.label}
                      className="flex gap-4 md:flex-col lg:flex-row "
                    >
                      <p className="whitespace-nowrap">{link.label}</p>
                      <p className="medium-16 font-bold  ">{link.value}</p>
                    </Link>
                  ))}
                </FooterColumn>
              </div>

              <div className="flex flex-col gap-5">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="regular-14 flex gap-4 text-gray-800 ">
                    {SOCIALS.links.map((link) => (
                      <li key={link.platform}>
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={link.icon}
                            alt={`${link.platform} icon`}
                            width={24}
                            height={24}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />

        <p className="font-boldregular-14 w-full text-center text-gray-800 ">
          2024 QAZA | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
