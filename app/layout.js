import "./globals.css";
import Link from "next/link"; // Essential for fast navigation

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold tracking-tighter">ONIMISI.DEV</h1>
          <div className="space-x-6 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/projects" className="bg-black text-white px-4 py-2 rounded-full text-sm">
              Portfolio
            </Link>
          </div>
        </nav>

        {/* This is where your page content (page.js) is injected */}
        <main>{children}</main>
        
        <footer className="p-10 text-center text-gray-400 text-sm">
          © 2026 Built with Next.js & Tailwind
        </footer>
      </body>
    </html>
  );
}