export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-3 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-s text-center md:text-left">
          © {new Date().getFullYear()} iNotebook — Built with 🤍 by Vaduni
        </p>
        <div className="mt-2 md:mt-0 flex space-x-3 text-s">
          <a
            href="https://github.com/Vaduni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vaduni-niranjan-6a2780311"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="/privacy"
            className="hover:text-white transition"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
