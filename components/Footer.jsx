import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Resources Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="font-bold text-lg mb-3">Resources</h3>
          <ul>
            <li>
              <Link href="/legislation-database" className="hover:text-white">
                Legislation Database
              </Link>
            </li>
            <li>
              <Link href="/political-news" className="hover:text-white">
                Political News
              </Link>
            </li>
            <li>
              <Link href="/voting-information" className="hover:text-white">
                Voting Information
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="font-bold text-lg mb-3">Help</h3>
          <ul>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/support-center" className="hover:text-white">
                Support Center
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="font-bold text-lg mb-3">About</h3>
          <ul>
            <li>
              <Link href="/our-mission" className="hover:text-white">
                Our Mission
              </Link>
            </li>
            <li>
              <Link href="/the-team" className="hover:text-white">
                The Team
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p>
            1234 Democracy Ave.
            <br />
            Capitol City, USA
          </p>
          <p>Email: contact@voxpopuli.com</p>
        </div>
      </div>

      <div className="text-center pt-8">
        <p>
          &copy; {new Date().getFullYear()} Vox Populi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
