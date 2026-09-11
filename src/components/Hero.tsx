const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
         <div className="w-full lg:w-1/2 text-center lg:text-left">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Build Your Ideal <br/>
 <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
<p className="mt-6 text-base sm:text-lg text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">
          Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
  </p>
 <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mt-8">
             <button
 className="px-6 py-3 rounded-lg text-white font-semibold
  bg-linear-to-r from-orange-500 via-pink-500 to-violet-600
  hover:opacity-90 transition duration-300 cursor-pointer"
 >
      Explore Technologies
 </button>
 <button
  className="px-6 py-3 rounded-lg font-semibold
border border-gray-300 text-gray-700
 hover:border-pink-500 hover:text-pink-500
 transition duration-300 cursor-pointer"
   >
Learn More
 </button>
</div>
 </div>
<div className="w-full lg:w-1/2 flex justify-center">
 <img src="/banner-stack.png" alt="" />
</div>
 </div>
</section>
  );
};

export default Hero;