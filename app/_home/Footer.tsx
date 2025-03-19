import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4C4B4B] text-white py-6 mt-12 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © {new Date().getFullYear()}Unique Marathi Biodata Creator
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-pink-400" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-blue-300" aria-label="Twitter">
            <Twitter size={24} />
          </a>
        </div>
      </div>

      {/* Additional Links */}
      <div className="text-center mt-4 text-gray-400 text-sm">
        <a href="#" className="hover:underline mx-2">Privacy Policy</a>
        |
        <a href="#" className="hover:underline mx-2">Terms & Conditions</a>
        |
        <a href="#" className="hover:underline mx-2">Contact Us</a>
      </div>
    </footer>
  );
}
