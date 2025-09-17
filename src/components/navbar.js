// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/98 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-4xl font-bold text-black">
            📚 Quiz Game
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-14 ">
            <Link href="/" className="hover:text-gray-200 text-2xl  text-black">Home</Link>
            <Link href="/quiz" className="hover:text-gray-200 text-2xl text-black">Playquiz</Link>
            <Link href="/about" className="hover:text-gray-200 text-2xl  text-black">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-purple-700 px-4 pb-3 space-y-2">
          <Link
            href="/"
            className="block py-2 hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/quiz"
            className="block py-2 hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Play Quiz
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
