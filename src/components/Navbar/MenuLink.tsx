import { menuLinks } from "@/constants/menulinks";
import { Link } from "react-router-dom";

export default function MenuLink() {
  return (
    <ul className="flex gap-4">
      {menuLinks.map((link) => (
        <li className="text-[#374151]" key={link.href}>
          <Link to={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}
