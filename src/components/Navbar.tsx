import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { MenuSvg } from "@/svgicons/Svg";
import Link from "next/link";

export const CustomNavbar = () => {
  const navItems = [
    { title: "Blog", url: "/" },
    { title: "Latest Articles", url: "/" },
    { title: "Featured", url: "/" },
    { title: "Topics", url: "/" },
    { title: "About us", url: "/" },
    { title: "Contact", url: "/" },
  ];
  return (
    <Navbar
      isBlurred={false}
      className="py-3 border-b border-gray-400 bg-black"
    >
      <NavbarBrand className="text-white text-2xl">
        <Link href='/'>Latest News</Link>
      </NavbarBrand>
      <ul className=" text-white hidden lg:flex gap-5">
        {navItems.map((item, index) => (
          <li key={index} className="">
            {item.title}
          </li>
        ))}
      </ul>
      <div className="lg:hidden">
        <MenuSvg />
      </div>
    </Navbar>
  );
};
