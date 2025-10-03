import { useState, useRef, useEffect } from "react";
import { menuLinks } from "@/constants/menulinks";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function MenuLink() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [closing, setClosing] = useState(false);

  // Закрытие при клике вне
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setClosing(true);
        setTimeout(() => {
          setOpen(false);
          setClosing(false);
        }, 300);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <div className="relative">
      {/* Десктопное меню (от 461px и выше) */}
<ul className="hidden sm:flex gap-4">
  {menuLinks.map((link) => (
    <li
      key={link.href}
      className="relative text-[#374151] font-normal text-lg leading-6"
    >
      <a
        href={link.href}
        onClick={(e) => {
          e.preventDefault(); // отключаем резкий прыжок
          const section = document.querySelector(link.href);
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 hover:text-blue-600"
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>


      {/* Кнопка бургер / крестик (до 460px) */}
      <button
        aria-label="Menu"
        onClick={() => (open ? handleClose() : setOpen(true))}
        className="sm:hidden z-[60] relative p-2 rounded-md hover:bg-gray-100"
      >
        {open ? (
          <AiOutlineClose size={28} className="text-black transition-transform duration-300" />
        ) : (
          <AiOutlineMenu size={28} className="text-black transition-transform duration-300" />
        )}
      </button>

      {/* Мобильное меню */}
      {(open || closing) && (
        <div
          ref={dropdownRef}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 transition-opacity duration-300 ${
            open && !closing ? "opacity-100" : "opacity-0"
          }`}
        >
         <ul className="flex flex-col gap-8 text-2xl font-semibold text-gray-800">
  {menuLinks.map((link, i) => (
    <li
      key={link.href}
      className={`opacity-0 transform translate-y-6 animate-slideIn`}
      style={{
        animationDelay: `${i * 0.1 + 0.2}s`,
        animationFillMode: "forwards",
      }}
    >
      <a
        href={link.href}
        onClick={(e) => {
          e.preventDefault(); // убираем стандартный переход
          handleClose(); // плавное закрытие
          setTimeout(() => {
            const section = document.querySelector(link.href);
            section?.scrollIntoView({ behavior: "smooth" });
          }, 300); // ждём пока закроется модалка
        }}
        className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 hover:text-blue-600"
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>

        </div>
      )}

      {/* Анимация li */}
      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideIn {
            animation: slideIn 0.4s ease forwards;
          }
        `}
      </style>
    </div>
  );
}
