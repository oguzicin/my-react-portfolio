import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle, FaDotCircle } from "react-icons/fa";

type ImageSlideProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export default function ImageSlide({ images }: ImageSlideProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label="Image Slider"
      className="relative w-[42rem] h-full flex items-center justify-center custom-xm:w-full custom-sm:w-[35rem]" 
    >
      <div className="flex overflow-hidden w-full h-full rounded-3xl">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={`object-cover w-full h-full flex-shrink-0 flex-grow-0 transition-transform duration-300 ease-in-out`}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          />
        ))}
      </div>
      
      <button
        onClick={showPrevImage}
        className="absolute top-0 bottom-0 left-0 p-4 cursor-pointer bg-transparent transition-colors duration-100 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
        aria-label="View Previous Image"
      >
        <div className="text-[#64ffda] text-2xl font-bold w-8 h-8 bg-gray-400 bg-opacity-30 rounded-full  items-center flex justify-center" >
        <FaArrowLeft />    
        </div>
        
      </button>
      <button
        onClick={showNextImage}
        className="absolute top-0 bottom-0 right-0 p-4 cursor-pointer bg-transparent transition-colors duration-100 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
        aria-label="View Next Image"
      >
        <div className="text-[#64ffda] text-2xl font-bold w-8 h-8 bg-gray-400 bg-opacity-30 rounded-full items-center flex justify-center" >
            <FaArrowRight/>
        </div>
        
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 bg-gray-400 p-1 rounded-full bg-opacity-70">
        {images.map((_, index) => (
          <button
            key={index}
            className="w-4 h-4 cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110 focus-visible:scale-110"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
                <div className="text-[#64ffda] w-full h-full" >
                    <FaDotCircle/>
                </div>
              
            ) : (
                <div className="text-[#64ffda] w-full h-full" >
                    <FaCircle/>
                </div>
              
            )}
          </button>
        ))}
      </div>
      <div />
    </section>
  );
}
