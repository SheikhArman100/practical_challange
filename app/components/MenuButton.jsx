"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="dropdown dropdown-end xs:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        
        className="m-1"
      >
        {menuOpen ? <RxCross1 size={36} /> : <AiOutlineMenu size={36} />}
      </button>
      {menuOpen?(<ul
        className="dropdown-content menu p-2 shadow-lg bg-base-300 rounded-box h-80 w-60  text-[1.1rem]"
      >
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
      </ul>):""}
      
    </div>
  );
};

export default MenuButton;
