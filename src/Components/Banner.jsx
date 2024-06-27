const Banner = ({ src, img, minWidth }) => {
  return (
    <picture>
      <source media={`(min-width: ${minWidth}px)`} srcSet={src} />
      <img className="h-auto w-full align-middle" src={img} />
    </picture>
  );
};

export default Banner;
