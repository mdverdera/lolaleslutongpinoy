const About = () => {
  return (
    <>
      {/* About Me Section  */}
      <section id="aboutMe">
        {/* About Me Container */}
        <div className="relative container flex flex-col items-center max-w-lg mx-auto mt-6 mb-32 px-6 text-gray-900 md:flex-row md:px-0 md:max-w-5xl">
          <picture>
            <img
              src="/img/illustration-hero.svg"
              width={600}
              height={420}
              alt="my picture"
            />
          </picture>

          {/* Text Container */}
          <div className="top-32 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              About Me
            </h2>

            <p className="max-w-md text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nisi,
              ab provident quae dolores harum mollitia nobis itaque numquam,
              maiores fugit repellat sunt illum aliquid iure dignissimos,
              recusandae exercitationem quos!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
