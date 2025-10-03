import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type GalleryItem = {
  id: string;
  imageUrl: string;
  alt?: string;
};

export const GALLERY: GalleryItem[] = [
  { id: "1", imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80&auto=format&fit=crop", alt: "Дрон на стадионе" },
  { id: "2", imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80&auto=format&fit=crop", alt: "Команда празднует победу" },
  { id: "3", imageUrl: "https://images.unsplash.com/photo-1549921296-3a4b0e1b5d5e?w=800&q=80&auto=format&fit=crop", alt: "Дрон на тренировке" },
  { id: "4", imageUrl: "https://images.unsplash.com/photo-1581092795360-1d1a0e3f9c2e?w=800&q=80&auto=format&fit=crop", alt: "Дрон атакует ворота" },
  { id: "5", imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop", alt: "Судьи анализируют матч" },
  { id: "6", imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format&fit=crop", alt: "Дрон с кубком" },
  { id: "7", imageUrl: "https://images.unsplash.com/photo-1581090700227-4c4fefbe07c5?w=800&q=80&auto=format&fit=crop", alt: "Тренировка в зале" },
  { id: "8", imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop", alt: "Тренеры обсуждают" },
  { id: "9", imageUrl: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800&q=80&auto=format&fit=crop", alt: "Дрон на поле" },
  { id: "10", imageUrl: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=800&q=80&auto=format&fit=crop", alt: "Игрок с дронами" },
  { id: "11", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop", alt: "Дрон вблизи" },
  { id: "12", imageUrl: "https://images.unsplash.com/photo-1554475901-4538ddfbccc4?w=800&q=80&auto=format&fit=crop", alt: "Кубок команды" },
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
    <section className="py-16 bg-white" aria-labelledby="gallery-heading">
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
