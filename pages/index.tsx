import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FilmIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  return (
    <>
      <nav className="container relative mx-auto py-8 px-24">
        {/* Flex container for nav items */}
        <div className="flex items-center justify-between space-x-20 my-6">
          {/* Logo */}
          <div className="flex items-center space-x-4 z-30">
            <picture>
              <img
                src="/img/lola-les-logo.svg"
                alt="logo"
                width={45}
                height={45}
              />
            </picture>
            <h1
              className={`uppercase tracking-widest ${
                isOpen ? "text-white" : "text-veryDarkBlue"
              } `}
            >
              Lola Les Lutong Pinoy
            </h1>
          </div>

          {/* Menu Items */}
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <Link href="/" scroll={false}>
              <a className="tracking-widest hover:text-softRed">Home</a>
            </Link>
            <Link href="#" scroll={false}>
              <a className="tracking-widest hover:text-softRed">About</a>
            </Link>
            <Link href="#" scroll={false}>
              <a className="tracking-widest hover:text-softRed">Recipes</a>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className={`${
              isOpen && "open"
            } z-30 block md:hidden focus:outline-none hamburger`}
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-20 ${
            isOpen ? "flex" : "hidden"
          } flex-col items-center self-end w-full h-full max-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue md:hidden`}
        >
          <div className="w-full py-3 text-center">
            <Link href="/">
              <a className="block hover:text-softRed">Home</a>
            </Link>
          </div>

          <div className="w-full py-3 text-center">
            <Link href="#">
              <a className="block hover:text-softRed">About</a>
            </Link>
          </div>

          <div className="w-full py-3 text-center">
            <Link href="#">
              <a className="block hover:text-softRed">Recipes</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/* Container For Image and Content */}
        <div className="container flex flex-col-reverse mx-auto px-24 py-6 lg:flex-row lg:mb-0">
          {/* Content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              Simple Filipino Recipes
            </h1>

            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              A food blog that emphasizes Filipino food that is affordable and
              easy to do in daily life.
            </p>

            {/* Buttons Container */}
            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <Link href="#">
                <a className="p-4 text-sm font-semibold text-veryDarkBlue bg-purple-100 rounded shadow-md border-2 border-purple-100 md:text-base hover:bg-white hover:text-grayishBlue">
                  Start here
                </a>
              </Link>
            </div>
          </div>
          {/* Image */}

          <div className="relative mx-auto rounded-2xl  lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero "></div>

            <Image
              src="/img/illustration-hero.svg"
              alt="hero"
              width={655}
              height={520}
              className="relative z-10 lg:top-24 xl:top-0 rounded-2xl overflow-x-visible"
            />
          </div>
        </div>
      </section>

      <footer className="py-16 bg-purple-100">
        {/* Footer Flex Container */}
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          {/* Logo/ Menu Container */}
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <picture>
              <img
                src="/img/lola-les-logo.svg"
                alt="logo"
                width={180}
                height={180}
                className="mb-1"
              />
            </picture>

            <Link href="#" scroll={false}>
              <a className="uppercase hover:text-softRed">About</a>
            </Link>
            <Link href="#" scroll={false}>
              <a className="uppercase hover:text-softRed">Recipes</a>
            </Link>
            <Link href="#" scroll={false}>
              <a className="uppercase hover:text-softRed">Contact</a>
            </Link>
          </div>

          {/* Social Container */}
          <div className="flex space-x-10">
            <Link href="#" passHref>
              <picture>
                <img
                  src="/img/icon-youtube.svg"
                  alt="youtube"
                  className="h-12 p-2 rounded-full cursor-pointer ficon"
                />
              </picture>
            </Link>

            <Link href="#" passHref>
              <picture>
                <img
                  src="/img/icon-facebook.svg"
                  alt="facebook"
                  className="h-12 p-2 rounded-full cursor-pointer ficon"
                />
              </picture>
            </Link>

            <Link href="#" passHref>
              <picture>
                <img
                  src="/img/icon-instagram.svg"
                  alt="instagram"
                  className="h-12 p-2 rounded-full cursor-pointer ficon"
                />
              </picture>
            </Link>

            <Link href="#" passHref>
              <picture>
                <img
                  src="/img/icon-pinterest.svg"
                  alt="pinterest"
                  className="h-12 p-2 rounded-full cursor-pointer ficon"
                />
              </picture>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
