import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MerchItem = {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
};

export const MERCH: MerchItem[] = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80&auto=format&fit=crop",
    title: "Drone Soccer T-Shirt",
    price: "$29.99",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    title: "Team Hoodie",
    price: "$49.99",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80&auto=format&fit=crop",
    title: "Cap Limited Edition",
    price: "$19.99",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1537041373298-55dbb337e651?w=800&q=80&auto=format&fit=crop",
    title: "Backpack",
    price: "$59.99",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1526171111479-2d8f6d8d8a31?w=800&q=80&auto=format&fit=crop",
    title: "Water Bottle",
    price: "$14.99",
  },
  {
    id: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80&auto=format&fit=crop",
    title: "Drone Poster",
    price: "$9.99",
  },
];

const MerchSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Определяем количество карточек на странице в зависимости от ширины экрана
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(MERCH.length / itemsPerPage);

  // Автопереключение
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % totalPages);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, totalPages]);

  return (
    <section className="py-16" aria-labelledby="merch-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2
            id="merch-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Merch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r m-auto from-blue-600 to-red-500 mb-6"></div>
        </div>

        {/* Слайдер */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {MERCH.slice(
                index * itemsPerPage,
                index * itemsPerPage + itemsPerPage
              ).map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 font-bold mt-2">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Индикаторы */}
          <div className="flex justify-center mt-6 gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-gradient-to-r from-blue-500 to-red-500 w-5"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
