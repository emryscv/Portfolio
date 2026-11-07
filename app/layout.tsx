import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/emryscv/", icon: "/Instagram_icon.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emryscv/", icon: "/LinkedIn_icon.svg" },
  { label: "GitHub", href: "https://github.com/emryscv/", icon: "/Github_icon.svg" },
  { label: "Email", href: "mailto:emryscv@gmail.com", icon: "/Gmail_icon.svg" },
];

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Emrys Cruz Viera's projectv showcase",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-[#17221b]/12 bg-[#f4f1e9]/90 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 sm:px-8">
            <Link
              href="/"
              className="font-display text-[1.65rem] leading-none tracking-[-0.04em]"
              aria-label="Portfolio home"
            >
              YN<span className="text-[#d45532]">.</span>
            </Link>

            <nav
              aria-label="Primary navigation"
              className="flex items-center gap-2"
            >
              {[
                ["Home", "/"],
                ["Resume", "/resume"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    href === "/"
                      ? "bg-[#17221b] text-[#f4f1e9]"
                      : "text-[#17221b]/65 hover:bg-[#17221b]/7 hover:text-[#17221b]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-[#17221b]/15">
          <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d45532]">
                  Let&apos;s make something good
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="font-display text-4xl tracking-[-0.04em] transition-colors hover:text-[#d45532] sm:text-5xl"
                >
                  Get in touch.
                </a>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:gap-6">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-2 text-sm font-semibold text-[#17221b]/65 transition-colors hover:text-[#d45532]"
                  >
                    <Image src={icon} alt="" width={16} height={16} />
                    {label}
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-[#17221b]/12 pt-6 text-xs font-medium text-[#17221b]/45">
              <span>© 2026 Emrys Cruz Viera</span>
              <span>Developed with intention</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
