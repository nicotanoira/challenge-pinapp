import PinAppSVG from "../../public/PinAppSVG";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#FFF] text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <PinAppSVG />

        {/* Search Input */}
        <div className="max-w-md mx-4">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}
