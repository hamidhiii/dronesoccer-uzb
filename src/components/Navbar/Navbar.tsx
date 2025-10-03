import MenuLink from "./MenuLink";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="m-auto flex justify-between items-center px-10 py-4 relative">
      <div className=" left-10 top-4 z-[200]">
        <img className="md:w-30 w-22" src={logo} alt="logo" />
      </div>
      <MenuLink />
    </nav>
  );
}
