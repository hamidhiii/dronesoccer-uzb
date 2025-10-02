import React from "react";

// ---------------------------
// Константы — данные команды
// ---------------------------
export type TeamMember = {
  id: string;
  name: string;
  position: string;
  photoUrl: string;
  alt?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Иван Иванов",
    position: "Пилот / Капитан",
    photoUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
    alt: "Иван Иванов — пилот",
  },
  {
    id: "2",
    name: "Мария Петрова",
    position: "Техник",
    photoUrl:
      "https://images.unsplash.com/photo-1545996124-1b6a1b9d9f0a?w=800&q=80&auto=format&fit=crop",
    alt: "Мария Петрова — техник",
  },
  {
    id: "3",
    name: "Алексей Смирнов",
    position: "Стратег",
    photoUrl:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80&auto=format&fit=crop",
    alt: "Алексей Смирнов — стратег",
  },
  {
    id: "4",
    name: "Ольга Кузнецова",
    position: "Оператор",
    photoUrl:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68b?w=800&q=80&auto=format&fit=crop",
    alt: "Ольга Кузнецова — оператор",
  },
  {
    id: "5",
    name: "Дмитрий Соколов",
    position: "Инженер",
    photoUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80&auto=format&fit=crop",
    alt: "Дмитрий Соколов — инженер",
  },
];

// ---------------------------
// OurTeam компонент
// ---------------------------
type OurTeamProps = {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
};

const OurTeam: React.FC<OurTeamProps> = ({
  title = "Our Team",
  members = TEAM_MEMBERS,
}) => {
  return (
    <section
      className="py-16"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 id="team-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-25 h-1 bg-gradient-to-r m-auto from-blue-600 to-red-500 mb-6"></div>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10"
        >
          {members.map((m) => (
            <li
              key={m.id}
              className="flex flex-col items-center text-center bg-white text-gray-900 rounded-2xl shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-lg">
                <img
                  src={m.photoUrl}
                  alt={m.alt ?? m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-5">
                <p className="text-xl font-bold">{m.name}</p>
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  {m.position}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurTeam;