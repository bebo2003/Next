"use client";
import React from "react";
import Image from "../public/COVER_SVJ_ADPERSONAM.webp";
import Image2 from "../public/ارضيات جلد.webp";
import Image3 from "../public/IMG_2499-1-926x1024.webp";
import Image4 from "../public/نانوسيراميك.webp";
import Image5 from "../public/ppf.webp";
import Image6 from "../public/car2.jpg";
import Image7 from "../public/car3.jpeg";
import Image8 from "../public/car4.jpeg";
import Image9 from "../public/car5.jpeg";
import Image10 from "../public/car6.jpeg";
import Image12 from "../public/car7.jpeg";
import Image13 from "../public/car8.jpeg";
import HeroSlider from "./Hero";
import TestimonialsSlider from './Testimonials';
import ContactSection from './Contact';
import { motion } from "framer-motion";

export default function Home() {


  const news = [
  {
    id: 1,
    title: "عنوان مقالة تجريبية 1",
    description: "تفاصيل قصيرة لجذب القارئ حول مواصفات السيارة وأهم الميزات.",
    date: "25 سبتمبر 2025",
    img: Image6,
  },
  {
    id: 2,
    title: "عنوان مقالة تجريبية 2",
    description: "تفاصيل قصيرة لجذب القارئ حول مواصفات السيارة وأهم الميزات.",
    date: "26 سبتمبر 2025",
    img: Image7,
  },
  {
    id: 3,
    title: "عنوان مقالة تجريبية 3",
    description: "تفاصيل قصيرة لجذب القارئ حول مواصفات السيارة وأهم الميزات.",
    date: "27 سبتمبر 2025",
    img: Image8,
  },
  {
    id: 4,
    title: "عنوان مقالة تجريبية 4",
    description: "تفاصيل قصيرة لجذب القارئ حول مواصفات السيارة وأهم الميزات.",
    date: "28 سبتمبر 2025",
    img: Image9,
  },
  {
    id: 5,
    title: "عنوان مقالة تجريبية 5",
    description: "تفاصيل قصيرة لجذب القارئ حول مواصفات السيارة وأهم الميزات.",
    date: "29 سبتمبر 2025",
    img: Image10,
  },
  {
    id: 6,
    title: "عنوان مقالة تجريبية 6",
    description: "تفاصيل قصيرة لجذب القارئ حول مواصفات السيارة وأهم الميزات.",
    date: "30 سبتمبر 2025",
    img: Image12,
  },
];

  return (
      <div>
      <HeroSlider />

      <section className="w-full  text-[#b87333] py-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">


 <div className="rounded-xl bg-black overflow-hidden shadow-xl border border-[#b87333]">
          <img 
            src={Image.src}
            alt="car protection"
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* النص */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#b87333] mb-6">
            حماية السيارات! في برو رايز مرحبا بكم
          </h1>

          <p className="text-lg leading-8 text-gray-700 mb-4">
            في برو رايز، نحن شغوفون بمساعدتك في الحفاظ على سيارتك في حالة ممتازة...
          </p>

          <p className="text-lg leading-8 text-gray-700 mb-4">
            نقدم خدمات مثل حماية السيارات، وتظليل عازل حراري، وحماية نانو سيراميك.
          </p>

          <p className="text-lg leading-8 text-gray-700 mb-6">
            فريقنا الماهر يقدم نتائج عالية الجودة لنضمن مظهرًا رائعًا وبقاء سيارتك محمية.
          </p>

         <a
          href="tel:0123456789"
          className="relative inline-block px-6 py-2 font-bold text-[#b87333] bg-gradient-to-r from-[#B08B4F] to-black rounded-full overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-white opacity-20 blur-xl animate-cloud"></span>
          <span className="relative z-10">المزيد من المعرفة</span>
        </a>

        </div>

        {/* الصورة */}
       

      </div>
    </section>

 <section
      className="relative w-full py-24 text-center text-white overflow-hidden"
      dir="rtl"
    >
      {/* خلفية بسيطة بلمعة برونزية */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a1a1a] to-black"></div>

      {/* حركة ضوء برونزي بسيط يمين → يسار */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B08B4F]/15 to-transparent"
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* المحتوى */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* العنوان + أنيميشن دخول */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          خدمات <span className="text-[#B08B4F]">فاخرة</span> لسيارتك
        </motion.h2>

        {/* النص */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          حلول احترافية لحماية وتلميع السيارات بمعايير عالية وتجربة راقية.
        </motion.p>

        {/* زر متحرك */}
        <motion.a
          href="tel:0123456789"
          className="relative inline-flex items-center gap-3 px-8 py-3 text-lg font-bold rounded-full border border-[#B08B4F] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #B08B4F, #8a6b3c)",
            color: "#000"
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.07 }}
        >
          <span>اتصل بنا</span>
          <span className="text-xl">📞</span>

          {/* لمعة تمر على الزر */}
          <motion.span
            className="absolute inset-0 bg-white opacity-20 blur-xl"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.a>

      </div>
    </section>


    <section className="w-full py-20 bg-[black] text-[#b87333]">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* العنوان */}
    <h2 className="text-4xl font-bold mb-4 text-[#b87333]">
      كيف يمكننا مساعدتك؟
    </h2>

    <p className="text-lg text-gray-700 mb-6">
      حلول سريعة وفعّالة لجميع مشاكل سيارتك.
    </p>

    <div className="w-24 h-1 bg-[#B08B4F] mx-auto mb-12"></div>

    {/* الكروت */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

      {/* كرت 1 */}
      <div className="text-center border-[#b87333] ">
        <img
          src={Image2.src}
          className="w-full h-52 object-cover rounded-xl shadow-md "
          alt="ارضيات جلد للسيارات"
        />
        <h3 className="mt-4 text-xl font-bold text-[#b87333]">
          ارضيات جلد للسيارات
        </h3>
      </div>

      {/* كرت 2 */}
      <div className="text-center border-[#b87333] ">
        <img
          src={Image3.src}
          className="w-full h-52 object-cover rounded-xl shadow-md"
          alt="تظليل العازل حراري"
        />
        <h3 className="mt-4 text-xl font-bold text-[#b87333]">
          تظليل العازل حراري للسيارات
        </h3>
      </div>

      {/* كرت 3 */}
      <div className="text-center border-[#b87333]">
        <img
          src={Image4.src}
          className="w-full h-52 object-cover rounded-xl shadow-md"
          alt="النانو سيراميك"
        />
        <h3 className="mt-4 text-xl font-bold text-[#b87333]">
          النانو سيراميك للسيارات
        </h3>
      </div>

      {/* كرت 4 */}
      <div className="text-center border-[#b87333]">
        <img
          src={Image5.src}
          className="w-full h-52 object-cover rounded-xl shadow-md"
          alt="حماية السيارة PPF"
        />
        <h3 className="mt-4 text-xl font-bold text-[#b87333]">
          حماية السيارة PPF
        </h3>
      </div>

    </div>

    {/* الزر */}
    <div className="mt-12">
          <a
          href="tel:0123456789"
          className="relative inline-block px-6 py-2 font-bold text-[#f3f0ed] bg-gradient-to-r from-[#B08B4F] to-black rounded-full overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-white opacity-20 blur-xl animate-cloud"></span>
          <span className="relative z-10">عرض جميع الخدمات</span>
        </a>
    </div>

  </div>
</section>



  <main className="bg-[#0A0A0A] min-h-screen text-white">

      {/* HERO */}
      <section className="relative w-full h-[520px] mb-20">
        <img 
          src={Image6.src}
          className="w-full h-full object-cover opacity-60"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-10 left-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-3">
            أحدث سيارات 2025 — فخامة بتصميم جديد
          </h1>

          {/* Bronze Line */}
          <div className="w-32 h-[3px] bg-[#C49A6C] mb-4"></div>

          <p className="text-gray-300 text-lg mb-6">
            اكتشف الجيل الجديد من السيارات بتكنولوجيا متقدمة ولمسة فخامة.
          </p>

          <button className="px-7 py-3 rounded-lg text-black font-semibold"
            style={{ backgroundColor: "#C49A6C" }}>
            اقرأ الآن
          </button>
        </div>
      </section>

      {/* ARTICLES GRID */}
     <section className="max-w-7xl mx-auto px-6">
  <h2 className="text-3xl font-bold mb-10">آخر الأخبار</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-[#b87333]">
    {news.map(  (item) => (
      <div
        key={item.id}
        className="rounded-xl overflow-hidden bg-[#1F1F1F] 
                   hover:-translate-y-1 hover:shadow-xl 
                   transition duration-300 shadow-lg"
      >
        <img
          src={typeof item.img === "string" ? item.img : item.img?.src}
          alt={item.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{item.description}</p>
          <span className="text-[#C49A6C] text-xs">{item.date}</span>
        </div>
      </div>
    ))}
  </div>
</section>


    </main>



    <TestimonialsSlider />

    <ContactSection />

     
    </div>
  );
}
