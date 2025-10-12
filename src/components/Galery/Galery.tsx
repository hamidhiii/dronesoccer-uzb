import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../../assets/Galerry/img1.jpg'
import img2 from '../../assets/Galerry/img2.jpg'
import img3 from '../../assets/Galerry/img3.jpg'
import img4 from '../../assets/Galerry/img4.jpg'
import img5 from '../../assets/Galerry/img5.jpg'
import img6 from '../../assets/Galerry/img6.jpg'
import img7 from '../../assets/Galerry/img7.jpg'
import img8 from '../../assets/Galerry/img8.jpg'
import img9 from '../../assets/Galerry/img9.jpg'
import img10 from '../../assets/Galerry/img10.jpg'
import img11 from '../../assets/Galerry/img11.jpg'
import img12 from '../../assets/Galerry/img12.jpg'

export type GalleryItem = {
  id: string;
  imageUrl: string;
  alt?: string;
};

export const GALLERY: GalleryItem[] = [
  { id: "1", imageUrl:img1, alt: "Дрон на стадионе" },
  { id: "2", imageUrl: img2, alt: "Команда празднует победу" },
  { id: "3", imageUrl: img3, alt: "Дрон на тренировке" },
  { id: "4", imageUrl: img4, alt: "Дрон атакует ворота" },
  { id: "5", imageUrl: img5, alt: "Судьи анализируют матч" },
  { id: "6", imageUrl: img6, alt: "Дрон с кубком" },
  { id: "7", imageUrl: img7, alt: "Тренировка в зале" },
  { id: "8", imageUrl: img8, alt: "Тренеры обсуждают" },
  { id: "9", imageUrl: img9, alt: "Дрон на поле" },
  { id: "10", imageUrl: img10, alt: "Игрок с дронами" },
  { id: "11", imageUrl: img11, alt: "Дрон вблизи" },
  { id: "12", imageUrl: img12, alt: "Кубок команды" },
];

const GalleryCarousel: React.FC = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const itemsPerPage = 6;
  const totalPages = Math.ceil(GALLERY.length / itemsPerPage);

  const handlePrev = () => {
    setDirection("left");
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentItems = GALLERY.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section id="gallery" className="py-16 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
        <h2 id="team-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Gallery & Highlights
          </h2>
          <div className="w-25 h-1 bg-gradient-to-r m-auto from-blue-600 to-red-500 mb-6"></div>
        </div>

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {currentItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  className="relative rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.alt ?? "gallery image"}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-6">
          <button
            onClick={handlePrev}
            className="p-3 hover:cursor-pointer bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow hover:opacity-90 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 hover:cursor-pointer bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow hover:opacity-90 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
