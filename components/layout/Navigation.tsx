import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <>
      <nav className="container relative mx-auto py-6 px-6 lg:px-24">
        {/* Flex container for nav items */}
        <div className="flex items-center justify-between space-x-20 my-6">
          {/* Logo */}
          <div className="flex items-center space-x-4 z-30">
            <picture>
              <img
                src="/img/lola-les-logo.svg"
                alt="logo"
                width={60}
                height={60}
              />
            </picture>
            <h1
              className={`uppercase tracking-widest ${
                isOpen ? "text-white" : "text-veryDarkBlue"
              } hidden sm:block`}
            >
              Lola Les Lutong Pinoy
            </h1>
          </div>

          {/* Menu Items */}
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <Link href="/" scroll={false}>
              <a className="tracking-widest hover:text-softRed">Home</a>
            </Link>
            <Link href="/about" scroll={false}>
              <a className="tracking-widest hover:text-softRed">About</a>
            </Link>
            <Link href="/recipes" scroll={false}>
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
            <Link href="/about">
              <a className="block hover:text-softRed">About</a>
            </Link>
          </div>

          <div className="w-full py-3 text-center">
            <Link href="/recipes">
              <a className="block hover:text-softRed">Recipes</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
