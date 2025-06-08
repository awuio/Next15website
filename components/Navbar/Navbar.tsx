import { DarkMode } from "./DarkMode";
import DropdownListmenu from "./DropdownListmenu";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-8 flex-col sm:flex-row sm:items-center gap-4">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Search />
        {/* DarkMode & Profile */}
        <div className=" flex gap-4">
          <DarkMode/>
          <DropdownListmenu/>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
