import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlyRank | Capstone Workspace",
  description: "The foundation for the FlyRank capstone project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <header className="border-b border-[var(--border)] bg-white/90">
          <div className="page-container flex min-h-[72px] flex-wrap items-center justify-between gap-x-8 gap-y-2 py-3">
            <Link href="/" className="flex items-center gap-3 font-semibold text-[var(--foreground)]">
              <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-bold text-white">
                F
              </span>
              <span className="text-lg">FlyRank</span>
            </Link>
            <nav aria-label="Main navigation" className="grid w-full grid-cols-3 gap-1 sm:w-auto sm:flex sm:items-center sm:gap-2">
              <a className="nav-link" href="/dashboard">Dashboard</a>
              <a className="nav-link" href="/projects">Projects</a>
              <a className="nav-link" href="/settings">Settings</a>
            </nav>
          </div>
        </header>
        <main className="page-container flex-1 py-10 sm:py-14">{children}</main>
        <footer className="border-t border-[var(--border)]">
          <div className="page-container py-5 text-sm text-[var(--muted)]">
            FlyRank capstone workspace
          </div>
        </footer>
      </body>
    </html>
  );
}
