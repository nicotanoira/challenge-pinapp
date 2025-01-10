"use client";
import Link from "next/link";
import PinAppSVG from "../../public/PinAppSVG";
import SearchInput from "./SearchInput";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#FFF] text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <PinAppSVG />
        </Link>
        {pathname === "/" && (
          <div className="max-w-md mx-4">
            <SearchInput />
          </div>
        )}
      </div>
    </nav>
  );
}
