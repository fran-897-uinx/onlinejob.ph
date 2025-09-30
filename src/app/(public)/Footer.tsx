import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 mt-16 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Brand */}
        <div>
          <Link
            href="/"
            className="text-xl font-semibold text-blue-950 dark:text-gray-100"
          >
            PLC
            <span className="border-l-2 border-gray-600 dark:border-gray-400 ml-1.5 pl-1.5">
              Hire
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Connecting companies with top remote talent worldwide.
          </p>
        </div>

        {/* Column 2 - Company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Company
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link
                href="#about"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#careers"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Partnerships
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="#support"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Industry News
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Legal */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Legal
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link
                href="#terms"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#privacy"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#security"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Security
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 dark:bg-gray-800 py-4 transition-colors duration-300">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex gap-5 items-center">
            <Link
              href="/"
              className="text-xl font-semibold text-blue-950 dark:text-gray-100"
            >
              PLC
              <span className="border-l-2 border-gray-600 dark:border-gray-400 ml-1.5 pl-1.5">
                Hire
              </span>
            </Link>
            <p>
              Copyright © {new Date().getFullYear()} PLChire. All rights
              reserved.
            </p>
          </div>

          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
