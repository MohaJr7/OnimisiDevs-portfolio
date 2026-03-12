import Link from "next/link";

export default function Footer() {
  // This pulls the secret from your environment variables
  const adminSecret = process.env.ADMIN_SECRET;
  const adminLink = `/admin?pass=${adminSecret}`;

  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-100 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} — Built with Next.js & MongoDB</p>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">
            Projects
          </Link>
          
          {/* Visible and professional Admin link */}
          <Link 
            href={adminLink} 
            className="text-gray-300 hover:text-gray-600 transition-colors border-l border-gray-200 pl-6 ml-2 font-medium"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}