const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-900 items-center justify-center w-full h-[50vh] px-4 md:px-8 lg:px-16">
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          <span className="text-yellow-500">Empowering</span> Your{" "}
          <span className="text-blue-600">Digital Transformation</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white">
          We are a team of passionate developers, designers, and engineers who
          create innovative solutions. Bringing Your Vision to Life with Advanced
          Technology
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
