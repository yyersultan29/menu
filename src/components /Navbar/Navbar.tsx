// 'use client'

import { FC } from "react";


export default function NavigationBar() {

  return (
    <>
      <nav className="w-full flex justify-between">
        <button className="ml-4">Menu</button>
        <button className="ml-4">Profile</button>
        <button className="ml-4">Cart</button>
        <button className="ml-4">Orders</button>

      </nav>
    </>
  )
}