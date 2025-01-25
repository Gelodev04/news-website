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
    <Navbar isBlurred={false} className="py-3 border-b border-gray-400 bg-black">
      <NavbarBrand className="text-white text-2xl">Latest News</NavbarBrand>
      <ul className=" text-white hidden md:flex">
        {navItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <MenuSvg/>
    </Navbar>
  );
};
