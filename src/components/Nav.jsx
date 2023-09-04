import { adidas } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={adidas} alt="logo" width={70} height={5} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
          <img src={hamburger} width={25} height={25} alt="hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
