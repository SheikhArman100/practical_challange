import Image from "next/image";
import Link from "next/link";

import logo from "../../public/Logo.svg";
import ButtonWrapper from "./ButtonWrapper";
import MenuButton from "./MenuButton";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image
          src={logo}
          height="auto"
          className="h-[3rem] sm:h-[3.75rem] aspect-square"
          alt="logo"
        />
      </Link>
      <ul className="hidden xs:flex items-center  gap-x-[1rem] font-[400] text-base sm:text-lg sm:gap-x-[1.2rem] sm:gap-x-[1.8rem]">
        <li>
          <Link href="">Stream</Link>
        </li>
        <li>
          <Link href="">Shop</Link>
        </li>
        <li>
          <Link href="">Pricing</Link>
        </li>
        <li>
          <Link href="">Join</Link>
        </li>
        <li>
          <Link href="">Contract</Link>
        </li>
      </ul>
        
      <div className="flex items-center gap-x-2">
        <ButtonWrapper />
        <MenuButton />
      </div>
    </div>
  );
};

export default Navbar;
