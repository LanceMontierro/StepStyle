const Featured = ({ feature, title }) => {
  return (
    <section className="relative px-[25px] mt-20 max-w-[1296px] mx-auto">
      <div className="my-8 text-center">
        <h1 className="text-titlexl  font-Anton  font-medium">{title}</h1>
      </div>
      <div className="flex items-center gap-5 justify-center max-[768px]:flex-col ">
        {feature.map((outfit, i) => (
          <div
            className="h-[350px] w-[350px] relative group overflow-hidden max-[768px]:w-full max-[768px]:h-full"
            key={i}
          >
            <img
              src={outfit.img}
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-titlelg font-medium absolute bottom-10 w-full text-center font-Ubuntu text-white max-[768px]:text-[29px] ">
              {outfit.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
