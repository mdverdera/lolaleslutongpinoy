import Link from "next/link";

const Footer = () => {
  return (
    <>
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

            <Link href="/about" scroll={false}>
              <a className="uppercase hover:text-softRed">About</a>
            </Link>
            <Link href="/recipes" scroll={false}>
              <a className="uppercase hover:text-softRed">Recipes</a>
            </Link>
            {/* <Link href="/contact" scroll={false}>
              <a className="uppercase hover:text-softRed">Contact</a>
            </Link> */}
          </div>

          {/* Social Container */}
          <div className="flex space-x-4 sm:space-x-8">
            <Link
              href="https://www.youtube.com/channel/UCqkfjJDkUYuayjqku79NJRQ"
              passHref
            >
              <picture>
                <img
                  src="/img/icon-youtube.svg"
                  alt="youtube"
                  className="h-12 p-2 rounded-full cursor-pointer ficon"
                />
              </picture>
            </Link>

            <Link href="https://www.facebook.com/LolaLesLutongPinoy" passHref>
              <picture>
                <img
                  src="/img/icon-facebook.svg"
                  alt="facebook"
                  className="h-12 p-2 rounded-full cursor-pointer ficon"
                />
              </picture>
            </Link>

            <Link href="https://www.instagram.com/lolaleslutongpinoy/" passHref>
              <picture>
                <img
                  src="/img/icon-instagram.svg"
                  alt="instagram"
                  className="h-12 p-2 rounded-full cursor-pointer ficon"
                />
              </picture>
            </Link>

            <Link href="https://www.pinterest.ph/lolaleslutongpinoy/" passHref>
              <picture>
                <img
                  src="/img/icon-pinterest.svg"
                  alt="pinterest"
                  className="h-12 p-2 rounded-full cursor-pointer ficon"
                />
              </picture>
            </Link>
            <Link href="https://www.tiktok.com/@lolaleslutongpinoy/" passHref>
              <picture>
                <img
                  src="/img/icon-tiktok.svg"
                  alt="tiktok"
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

export default Footer;
