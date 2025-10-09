import { NavLink } from "react-router";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="px-7 bg-gray-900 text-white py-10">
      <div className="grid md:grid-cols-4 gap-8 items-start border-b border-gray-700 pb-6">
        <NavLink className="flex items-center justify-center md:justify-start gap-3">
          <img className="h-[50px]" src={logo} alt="App Store Logo" />
          <p className="font-bold text-lg">App Store</p>
        </NavLink>

        <div className="text-center">
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink to="/" className="hover:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/app" className="hover:text-white">
                All App
              </NavLink>
            </li>
            <li>
              <NavLink to="/installedApp" className="hover:text-white">
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="font-semibold text-lg mb-3">Follow Us</h2>
          <div className="flex justify-center gap-4 text-gray-400">
            <a className="hover:text-blue-400 text-xl">
              <TiSocialTwitter />
            </a>
            <a className="hover:text-blue-600 text-xl">
              <FaLinkedinIn />
            </a>
            <a className="hover:text-blue-500 text-xl">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h2 className="font-semibold text-lg mb-3">Contact Us</h2>
          <p className="text-gray-400 text-sm">
            Have questions or feedback?
            <br />
            <a
              href="mailto:mdmohebur11@gmail.com"
              className="text-blue-400 hover:underline"
            >
              mdmohebur11@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="pt-6 text-center text-gray-400 text-sm border-t border-gray-800 mt-6">
        <p>Copyright © 2025 - All rights reserved</p>
      </div>
    </footer>
  );
}
