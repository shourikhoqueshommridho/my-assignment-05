
import Logo from "./assets/logo-text.png";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <img
              src={Logo} alt="Dev Stack" className="w-32" />
 <p className="text-gray-500 leading-7 mt-4 max-w-sm">
              Curated tools, technologies, and resources for developers building
modern software.
            </p>
            <div className="flex items-center gap-3 mt-6 ">

              <a
                href="#"
                aria-label="GitHub"
                className="btn btn-circle btn-ghost text-gray-600 hover:text-[#8B5CF6]"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="btn btn-circle btn-ghost text-gray-600 hover:text-[#EC4899]"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="btn btn-circle btn-ghost text-gray-600 hover:text-[#DB2777]"
              >
                <FaLinkedin size={20} />
              </a>

            </div>
          </div>
          <div className="hidden md:flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a
                  href="#"
                  className="hover:text-[#DB2777] transition duration-200"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#DB2777] transition duration-200"
                >
                  Your Stack
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#DB2777] transition duration-200"
                >
                  Projects
                </a>
              </li>

            </ul>
          </div>

          <div className="hidden md:flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-gray-500">

              <li>
                <a
                  href="#"
                  className="hover:text-[#DB2777] transition duration-200"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#DB2777] transition duration-200"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#DB2777] transition duration-200"
                >
                  Careers
                </a>
              </li>

            </ul>
          </div>
          <div className="hidden md:flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-4">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-500">

              <li>
                <a
                  href="#"
                  className="hover:text-[#DB2777] transition duration-200"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#DB2777] transition duration-200"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#DB2777] transition duration-200"
                >
                  Cookie Policy
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div className="divider mt-10"></div>

        <div className=" flex flex-col items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-gray-500">

            <a
              href="#"
              className="hover:text-[#DB2777] transition duration-200"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-[#DB2777] transition duration-200"
            >
              Terms
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;

