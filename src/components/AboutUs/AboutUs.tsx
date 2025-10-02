
export default function AboutUs() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - Информация о команде */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About Our Team
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-500 mb-6"></div>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                We are <span className="font-semibold text-blue-600">Dronsoccer Uzbekistan</span> - 
                a passionate team of drone pilots, engineers, and sports enthusiasts who are pioneering 
                the future of aerial sports in Central Asia.
              </p>
              
              <p className="text-lg">
                Founded in 2025, our team combines cutting-edge technology with athletic precision 
                to compete at the highest levels of drone soccer. We represent the spirit of innovation 
                and excellence that defines modern Uzbekistan.
              </p>
              
              <p className="text-lg">
                Our mission is to elevate drone soccer to new heights while inspiring the next 
                generation of pilots and engineers in our region.
              </p>
            </div>

            {/* Статистика команды */}
            
            {/* Кнопка */}
            <div className="pt-6">
              <button className="bg-gradient-to-r hover:cursor-pointer from-blue-600 to-red-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Meet Our Players
              </button>
            </div>
          </div>

          {/* Правая часть - Командное фото */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Dronsoccer Uzbekistan Team"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Градиентный оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Информационная карточка поверх фото */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Champions of Innovation
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our diverse team brings together expertise in aerodynamics, 
                  programming, and competitive strategy to dominate the skies.
                </p>
                
                {/* Мини-достижения */}
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Active Since 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">International Competitors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
