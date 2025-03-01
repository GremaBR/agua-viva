"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LogoIcon from "../assets/logo.png";
import InstagramIcon from "../assets/instagram.png";
import FacebookIcon from "../assets/facebook.png";
import WhatsappIcon from "../assets/whatsapp.png";

export default function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Seção Hero como Overlay */}
      {isHeroVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHeroVisible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-[url('https://images.pexels.com/videos/7385122/4k-background-loop-ocean-7385122.jpeg')] flex flex-col items-center justify-center text-center px-6 z-50"
        >
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
              <Image src={LogoIcon} alt="Logo" width={180} height={38} priority />
              <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <h2 className="mb-2">Somos um espaço de serenidade e reflexão para grupos, igrejas e comunidades.</h2>
              </ol>
              <div className="flex gap-4 items-center flex-col sm:flex-row">
                <motion.button
                  onClick={() => setIsHeroVisible(false)}
                  className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                >
                  Conheça-nos
                </motion.button>
              </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.instagram.com/retirofontesdeaguaviva/" target="_blank" rel="noopener noreferrer">
                <Image aria-hidden src={InstagramIcon} alt="Instagram icon" width={25} height={25} />
                Instagram
              </a>
              <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.facebook.com/igrejaevangelicafontedeaguaviva" target="_blank" rel="noopener noreferrer">
                <Image src={FacebookIcon} alt="Facebook icon" width={25} height={25} />
                Facebook
              </a>
              <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://wa.me/5547996769040" target="_blank" rel="noopener noreferrer">
                <Image aria-hidden src={WhatsappIcon} alt="WhatsApp icon" width={25} height={25} />
                WhatsApp
              </a>
            </footer>
          </div>
        </motion.div>
      )}

      <div id="sobre" className="py-20 px-6 bg-white dark:bg-gray-800 text-center">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl font-semibold">
          Sobre Nós
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-4 max-w-2xl mx-auto text-lg">
          Oferecemos um ambiente acolhedor para retiros espirituais, eventos religiosos e encontros comunitários.
        </motion.p>
      </div>
    </div>
  );
}
