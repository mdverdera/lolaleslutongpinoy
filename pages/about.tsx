import Image from "next/image";
import AboutMe from "../public/img/about-me.svg";

const About = () => {
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
  return (
    <>
      {/* About Me Section  */}
      <section id="aboutMe">
        {/* About Me Container */}
        <div className="relative container flex flex-col items-center max-w-lg mx-auto mt-6 mb-32 px-6 text-gray-900 md:flex-row md:px-0 md:max-w-5xl">
          <Image
            src={AboutMe}
            width={600}
            height={420}
            alt="my picture"
            placeholder="blur"
            blurDataURL={rgbDataURL(230, 230, 250)}
          />

          {/* Text Container */}
          <div className="top-32 pr-0 bg-white md:absolute md:right-0 md:py-16 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              About Me
            </h2>

            <p className="max-w-md text-center md:text-left">
              {`I'm an ordinary person who is a foodie and one of my hobby is
              cooking. I love cooking Filipino Food and I consider my budget for
              every food I prepare everyday. Preparing and cooking food is my
              passion and I love experimenting in the kitchen!`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
