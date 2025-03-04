"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LogoIcon from "../assets//logo.png";
import InstagramIcon from "../assets/instagram.png";
import FacebookIcon from "../assets/facebook.png";
import WhatsappIcon from "../assets/whatsapp.png";
import Carousel from "@/components/carrossel";
export default function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => setIsHeroVisible(false), 200); // Esconde após 0.8s (tempo da animação)
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-branco text-gray-900 dark:text-white ">
      <AnimatePresence>
        {isHeroVisible && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={isExiting ? { opacity: 0, y: "-100vh" } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-gray-950 bg-cover bg-center flex flex-col items-center justify-center text-center px-6 z-50"
          >
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
              <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
                <Image src={LogoIcon} alt="Logo" width={180} height={38} priority />
                <h2 className="zain-regular text-2xl">
                  Um refúgio de paz e renovação, onde grupos, igrejas e comunidades encontram aconchego, comunhão e momentos de profunda reflexão.
                </h2>

                <div className="flex gap-4 items-center flex-col sm:flex-row zain-regular">
                  <motion.button
                    onClick={handleExit}
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Conheça-nos
                  </motion.button>
                </div>
              </main>
              <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center zain-regular text-xl">
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.instagram.com/retirofontesdeaguaviva/" target="_blank" rel="noopener noreferrer">
                  <Image aria-hidden src={InstagramIcon} alt="Instagram icon" width={25} height={25} className="invert" />
                  Instagram
                </a>
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.facebook.com/igrejaevangelicafontedeaguaviva" target="_blank" rel="noopener noreferrer">
                  <Image src={FacebookIcon} alt="Facebook icon" width={25} height={25} className="invert" />
                  Facebook
                </a>
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://wa.me/5547996769040" target="_blank" rel="noopener noreferrer">
                  <Image aria-hidden src={WhatsappIcon} alt="WhatsApp icon" width={25} height={25} className="invert" />
                  WhatsApp
                </a>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Seção Sobre Nós */}
      <nav className="border-gray-200 bg-verdeEscuro dark:bg-verdeEscuro dark:border-gray-700 zain-regular">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={LogoIcon} className="h-18 w-20" alt="Flowbite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-branco">Fontes de água viva</span>
          </a>
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 text-xl">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-branco md:dark:hover:text-azulForte dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors duration-300 ease-in-out hover:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-branco md:dark:hover:text-azulForte dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors duration-300 ease-in-out hover:text-white"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-branco md:dark:hover:text-azulForte dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors duration-300 ease-in-out hover:text-white"
                >
                  Eventos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-branco md:dark:hover:text-azulForte dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors duration-300 ease-in-out hover:text-white"
                >
                  Localização
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-cyan-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-branco md:dark:hover:text-azulForte dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors duration-300 ease-in-out hover:text-white"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <main className="flex-grow">
      <div className="flex justify-center items-center">
        <Carousel />
      </div>
      </main>

      <footer className="w-full bg-verdeEscuro text-white py-6 mt-auto">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center space-y-4">

          {/* Links de navegação */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <a href="#" className="text-branco hover:text-azulForte transition">Sobre nós</a>
            <a href="#" className="text-branco hover:text-azulForte transition">Contato</a>
            <a href="#" className="text-branco hover:text-azulForte transition">Eventos</a>
            <a href="#" className="text-branco hover:text-azulForte transition">Localização</a>
          </nav>

          {/* Ícones sociais */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/retirofontesdeaguaviva/" target="_blank" rel="noopener noreferrer">
              <Image src={InstagramIcon} alt="Instagram" width={24} height={24} className="invert hover:opacity-75 transition" />
            </a>
            <a href="https://www.facebook.com/igrejaevangelicafontedeaguaviva" target="_blank" rel="noopener noreferrer">
              <Image src={FacebookIcon} alt="Facebook" width={24} height={24} className="invert hover:opacity-75 transition" />
            </a>
            <a href="https://wa.me/5547996769040" target="_blank" rel="noopener noreferrer">
              <Image src={WhatsappIcon} alt="WhatsApp" width={24} height={24} className="invert hover:opacity-75 transition" />
            </a>
          </div>

          <p className="text-xs md:text-sm text-branco">
            © {new Date().getFullYear()} Fontes de Água Viva. Desenvolvido por NeoWar.
          </p>

        </div>
      </footer>

    </div>
  );
}
