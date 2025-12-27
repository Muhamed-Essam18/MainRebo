import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">MyPortfolio</h1>
        </div>

        <ul className="flex flex-col md:flex-row gap-4 text-sm">
          <li>
            <a
              href="#projects"
              className="hover:text-amber-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="hover:text-amber-400 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="www.linkedin.com/in/muhamed-essam-9a8983247"
            className="hover:text-amber-400 transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/muhamed.essam1911/?utm_source=ig_web_button_share_sheet"
            className="hover:text-amber-400 transition-colors"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.facebook.com/muhamed.essam.50/"
            className="hover:text-amber-400 transition-colors"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="https://wa.me/201272570775www.linkedin.com/in/muhamed-essam-9a8983247"
            className="hover:text-amber-400 transition-colors"
          >
            <FaWhatsapp className="text-xl" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6">
        © 2025 MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
