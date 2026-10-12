"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Code2,
  ChevronDown,
  LogIn,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-(--border) bg-(--background-secondary)">
      
      {/* Main Navbar */}
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-14 xl:px-16 2xl:px-20">



             {/* Logo + Navigation */}
              <div className="flex items-center gap-110">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Code2
            size={30}
            strokeWidth={2.5}
            className="text-(--primary-hover)"
          />

          <span className="text-2xl font-semibold tracking-tight text-(--text)">
            DevVault
          </span>
        </Link>


        {/* Desktop Navigation */}
        <div className="ml-16 hidden items-center gap-15 lg:flex">

          <a
            href="#features"
            className="text-sm font-medium text-(--text-secondary) transition-colors duration-200 hover:text-(--text)"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-(--text-secondary) transition-colors duration-200 hover:text-(--text)"
          >
            How It Works
          </a>

          <a
            href="#pricing"
            className="text-sm font-medium text-(--text-secondary) transition-colors duration-200 hover:text-(--text)"
          >
            Pricing
          </a>

          <a
            href="#resources"
            className="flex items-center gap-1 text-sm font-medium text-(--text-secondary) transition-colors duration-200 hover:text-(--text)"
          >
            Resources
            <ChevronDown size={15} />
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-(--text-secondary) transition-colors duration-200 hover:text-(--text)"
          >
            FAQ
          </a>

        </div>
        </div>


        {/* Desktop Actions */}
        <div className="ml-auto hidden items-center gap-3 lg:flex">

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-lg border border-(--border-light) bg-(--card) px-5 py-2.5 text-sm font-medium text-(--text) transition-colors duration-200 hover:bg-(--border)"
          >
            <LogIn size={16} />
            Login
          </Link>

          <Link
            href="/signup"
            className="flex items-center gap-2 rounded-lg bg-(--primary) px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-(--primary-hover) active:bg-(--primary-active)"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto rounded-lg p-2 text-(--text-secondary) transition-colors hover:bg-(--card) hover:text-(--text) lg:hidden"
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>


      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-(--border) bg-(--background-secondary) px-6 py-5 lg:hidden">

          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4">

            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--text)"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--text)"
            >
              How It Works
            </a>

            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--text)"
            >
              Pricing
            </a>

            <a
              href="#resources"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-1 text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--text)"
            >
              Resources
              <ChevronDown size={15} />
            </a>

            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--text)"
            >
              FAQ
            </a>


            {/* Mobile Actions */}
            <div className="mt-2 flex flex-col gap-3 border-t border-(--border) pt-4">

              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-(--border-light) bg-(--card) px-4 py-2.5 text-sm font-medium text-(--text) transition-colors hover:bg-(--border)"
              >
                <LogIn size={16} />
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--primary-hover)"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}