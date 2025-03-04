import { useEffect, useState } from 'react';
import Image from "next/image";
import img1 from '../assets/img8.jpg';
import img2 from '../assets/img1.jpg';
import img3 from '../assets/img6.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img3.jpg';


const images = [img1, img2, img3, img4, img5];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Alternar imagens automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Muda a imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  // Navegação manual pelos botões
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="carousel" className="flex justify-content relative w-[95%] h-[400px] overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          data-carousel-item
        >
          <Image src={image} alt={`Imagem ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Botões de navegação */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 space-x-3 flex">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-verdeEscuro' : 'bg-braco'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;