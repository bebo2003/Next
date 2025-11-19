"use client";
import logo from "../../public/logoo.png";
import Link from "next/link";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full text-white overflow-hidden" style={{ direction: "rtl" }}>

      {/* Top Bar */}
      <div className="bg-black/40 backdrop-blur-sm flex items-center justify-between px-6 py-2 text-xs md:text-sm w-full max-w-screen-xl mx-auto">

        {/* Social Icons */}
        <div className="hidden md:flex gap-3">
          <FaInstagram className="hover:text-[#CD7F32] cursor-pointer" />
          <FaXTwitter className="hover:text-[#CD7F32] cursor-pointer" />
          <FaYoutube className="hover:text-[#CD7F32] cursor-pointer" />
          <FaFacebook className="hover:text-[#CD7F32] cursor-pointer" />
          <FaLinkedin className="hover:text-[#CD7F32] cursor-pointer" />
          <FaPinterest className="hover:text-[#CD7F32] cursor-pointer" />
          <FaTiktok className="hover:text-[#CD7F32] cursor-pointer" />
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-2 text-[#CD7F32] font-semibold">
          <FiPhone className="text-lg" />
          <span className="text-white">0544339334</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 text-sm bg-black/40 backdrop-blur-sm w-full max-w-screen-xl mx-auto">

        {/* Logo */}
       <div className="flex items-center">
  <img
    src={logo.src} // ضع هنا مسار الصورة
    alt="Pro Rays Logo"
     className="h-24 md:h-32 lg:h-40 w-auto"
  />
</div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-lg font-semibold whitespace-nowrap">
          <Link href="/" className="text-[#CD7F32] transition-all duration-300 hover:text-white hover:scale-105">
            الصفحة الرئيسية
          </Link>

          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="transition-all duration-300 hover:text-[#CD7F32] hover:scale-105"
            >
              خدماتنا ▾
            </button>

            {servicesOpen && (
              <div className="absolute right-0 mt-2 bg-black/80 border border-gray-600 rounded shadow-lg w-40 py-2 z-50">
                <Link href="/service1" className="block px-4 py-2 hover:bg-gray-800 transition-all">
                  خدمة 1
                </Link>
                <Link href="/service2" className="block px-4 py-2 hover:bg-gray-800 transition-all">
                  خدمة 2
                </Link>
                <Link href="/service3" className="block px-4 py-2 hover:bg-gray-800 transition-all">
                  خدمة 3
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="transition-all duration-300 hover:text-[#CD7F32] hover:scale-105">
            معلومات عنا
          </Link>

          <Link href="/contact" className="transition-all duration-300 hover:text-[#CD7F32] hover:scale-105">
            اتصل بنا
          </Link>

          <Link href="/blog" className="transition-all duration-300 hover:text-[#CD7F32] hover:scale-105">
            فلوگ
          </Link>
        </nav>

        {/* Call Button (Desktop) */}
        <a
          href="tel:0123456789"
          className="hidden md:inline-block relative px-6 py-2 font-bold text-white bg-gradient-to-r from-[#B08B4F] to-black rounded-full overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-white opacity-20 blur-xl animate-cloud"></span>
          <span className="relative z-10">اتصل الآن</span>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md py-6 px-6 flex flex-col gap-6 text-lg font-semibold animate-fadeIn">

          <Link href="/" className="hover:text-[#CD7F32]">الصفحة الرئيسية</Link>

          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex justify-between items-center hover:text-[#CD7F32]"
          >
            خدماتنا ▾
          </button>

          {servicesOpen && (
            <div className="flex flex-col gap-3 text-sm bg-black/40 p-3 rounded-lg">
              <Link href="/service1" className="hover:text-[#CD7F32]">خدمة 1</Link>
              <Link href="/service2" className="hover:text-[#CD7F32]">خدمة 2</Link>
              <Link href="/service3" className="hover:text-[#CD7F32]">خدمة 3</Link>
            </div>
          )}

          <Link href="/about" className="hover:text-[#CD7F32]">معلومات عنا</Link>
          <Link href="/contact" className="hover:text-[#CD7F32]">اتصل بنا</Link>
          <Link href="/blog" className="hover:text-[#CD7F32]">فلوگ</Link>

          <a
            href="tel:0123456789"
            className="px-6 py-3 text-center font-bold bg-gradient-to-r from-[#B08B4F] to-black rounded-full"
          >
            اتصل الآن
          </a>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes cloudMove {
          0% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(50%) translateY(-5%); }
          100% { transform: translateX(-50%) translateY(0); }
        }
        .animate-cloud {
          animation: cloudMove 4s infinite linear;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
}