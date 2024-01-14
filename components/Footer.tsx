import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center  md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="coreweb-logo.png"
              alt="logo"
              width={50}
              height={29}
              style={{
                marginRight: "10px",
                borderRadius: "50%",
                width: "25%",
                height: "auto",
              }}
            />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              {/* {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title} key={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {columns.links.map((link, index) => (
                      <li key={index}>
                        {columns.title === "Naša Zajednica" ? (
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
                </FooterColumn>
              ))} */}

              {FOOTER_LINKS.map((columns, columnIndex) => (
                <div key={columnIndex}>
                  <h2>{columns.title}</h2>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {columns.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {columns.title === "Naša Zajednica" ? (
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
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">{link.label}</p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </FooterColumn>
              </div>

              <div className="flex flex-col gap-5">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="regular-14 flex gap-4 text-gray-30">
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
        <p className="regular-14 w-full text-center text-gray-30">
          2024 CoreWeb | All rights reserved
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
