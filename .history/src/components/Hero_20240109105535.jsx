export default function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto bg-lufy ">
      <div className="absolute inset-0 top-[120px] mx-w-7xl mx-auto sm:px-16 px-6 flex">
        <div>
          <h1 className="heroHeadText">
            Hello i am <span className="text-[#16c734]">NEBULA</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">
            I am Web developer <br />
            Full-Stack , Machine Learning
          </p>
        </div>
      </div>
    </section>
  );
}
