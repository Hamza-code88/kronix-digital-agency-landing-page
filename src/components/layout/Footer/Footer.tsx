import React from "react";
import { Mail, Phone } from "lucide-react";
import { CONTACT_INFO, FOOTER_LINKS } from "../../../services/mockData";
import { CTACard } from "./CTACard";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#111204] text-white pt-32">
      {/* 1. OVERLAPPING CTA CARD */}
      {/* negative margin (-mt-64) isay upar kheench kar aadha white section par le jayega */}
      <div className="container mx-auto px-4 md:px-8 -mt-64 mb-20">
        <CTACard />
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="container mx-auto px-4 pb-12 md:px-8 md:pb-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          {/* Brand Info */}
          <div className="max-w-sm">
            <a href="/" className="mb-6 block text-3xl font-bold">
              Kro<span className="text-primary">nix.</span>
            </a>
            <p className="text-sm leading-relaxed text-white px-">
              Kronix - the leading digital agency based in the UK, working with
              top-tier clients, from start-ups to enterprises.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 text-gray-300 transition-colors hover:text-primary"
            >
              <Mail size={20} />
              <span>{CONTACT_INFO.email}</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-3 text-gray-300 transition-colors hover:text-primary"
            >
              <Phone size={20} />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            {/* Social Icons */}
            <div className="mt-2 flex gap-4">
              {CONTACT_INFO.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black transition-all hover:bg-white hover:text-black"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-bold text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 206 Made By Hamza-Code88 - All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
