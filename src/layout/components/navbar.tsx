"use client"

import { useState } from 'react';

import { usePathname, } from 'next/navigation';
import Link from "next/link"

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';


export default function NavigationBar() {

  const currentRoute = usePathname();

  return (
    <div className="sticky bottom-0 left-0 z-5 w-full flex justify-center bg-white ">

      <nav className="w-5/6  flex justify-between items-center  p-5">

        <button
          className={`${currentRoute === "/" ? "text-emerald-600" : "text-gray-600 "} hover:text-emerald-600`}
        >
          <Link href="/">
            <MenuBookOutlinedIcon />
            <div>Menu</div>
          </Link>
        </button>

        <button

          className={`${currentRoute === "/profile" ? "text-emerald-600" : "text-gray-600 "} hover:text-emerald-600`}
        >
          <Person2OutlinedIcon />
          <div>Profile</div>
        </button>

        <button

          className={`${currentRoute === "/cart" ? "text-emerald-600" : "text-gray-600 "} hover:text-emerald-600`}
        >
          <Link href="/cart">
            <ShoppingCartOutlinedIcon />
            <div>Cart</div>
          </Link>
        </button>

        <button

          className={`${currentRoute === "/history" ? "text-emerald-600" : "text-gray-600 "} hover:text-emerald-600`}
        >
          <RestoreOutlinedIcon />
          <div>Orders</div>
        </button>

      </nav>
    </div >
  )
}