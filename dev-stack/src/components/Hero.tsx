import banner from '../assets/banner-stack.png'
function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10 container mx-auto ">
      {/* Left side - Text */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-600 mt-6 text-lg">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium">
            Explore Technologies
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium">
            Learn More
          </button>
        </div>
      </div>

      {/* Right side - Image placeholder */}
      <div className=" md:w-110 h-90  rounded-2xl flex items-center justify-center">
        <img src={banner} alt=""/>
      </div>
    </section>
  )
}

export default Hero