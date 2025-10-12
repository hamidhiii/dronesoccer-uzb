
import Carousel from './Carousel';
import { FaArrowDown } from 'react-icons/fa';
import img1 from '../../assets/carusel/photo_2025-10-12_04-18-10.jpg'
import img2 from '../../assets/carusel/photo_2025-10-12_04-18-52.jpg'
import img3 from '../../assets/carusel/photo_2025-10-12_04-19-48.jpg'
import img4 from '../../assets/carusel/photo_2025-10-12_04-20-04.jpg'
import img5 from '../../assets/carusel/photo_2025-10-12_04-20-18.jpg'
import img6 from '../../assets/carusel/photo_2025-10-12_04-21-30.jpg'
import img7 from '../../assets/carusel/photo_2025-10-12_04-22-02.jpg'
import img8 from '../../assets/carusel/photo_2025-10-12_04-23-20.jpg'
import img9 from '../../assets/carusel/photo_2025-10-12_20-45-42.jpg'
import img10 from '../../assets/carusel/photo_2025-10-12_20-45-46.jpg'

export default function Header() {
  // Массив изображений для карусели
  const carouselImages = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10
  ];

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Карусель на фоне */}
      <Carousel images={carouselImages} interval={6000} />

      {/* Контент поверх карусели */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          {/* Заголовок */}
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white text-shadow-strong">
              Dronsoccer
            </span>
            <span className="block text-blue-400 text-shadow-strong">
              Uzbekistan
            </span>
          </h1>

          {/* Подзаголовок */}
          <p className="hero-subtitle text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 text-shadow-strong max-w-2xl mx-auto leading-relaxed">
            Dominating the skies with precision, speed, and unmatched aerial strategy. The future of competitive drone soccer is here.
          </p>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => {
                const section = document.querySelector("#gallery"); // ID секции
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-hero hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Highlights
            </button>

            <button
              onClick={() => {
                const section = document.querySelector("#contact"); // ID секции
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-hero bg-transparent hover:cursor-pointer border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Join Team
            </button>
          </div>


          {/* Дополнительная информация */}

        </div>
      </div>

      {/* Стрелка вниз для скролла */}
      <div className="absolute bottom-8 left-1/2 scroll-arrow z-10">
        <div 
        onClick={() => {
          const section = document.querySelector("#about"); // или id следующей секции
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        className="w-12 h-16 border-2 border-white rounded-full flex justify-center items-center cursor-pointer hover:border-blue-400 transition-colors">
          <FaArrowDown size={20} className="text-white" />
        </div>
      </div>
    </header>
  );
}
