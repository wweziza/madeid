<<<<<<< HEAD
'use client'
=======
>>>>>>> af8608d (first commit)
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import clsx from "clsx";
<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> af8608d (first commit)

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
<<<<<<< HEAD
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

=======
>>>>>>> af8608d (first commit)
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="flex justify-between items-center w-full">
        <NavbarBrand className="flex items-center gap-3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>

        <div className="flex items-center gap-4">
<<<<<<< HEAD
          <button
            className="lg:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>

=======
>>>>>>> af8608d (first commit)
          <ul className="hidden lg:flex gap-4">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>

<<<<<<< HEAD
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <ul className="absolute top-16 left-0 right-0 bg-white shadow-lg lg:hidden">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      "block px-4 py-2 hover:bg-gray-100",
                      "data-[active=true]:text-primary data-[active=true]:font-medium",
                    )}
                    color="foreground"
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on item click
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul>
          )}
=======
          {/* Theme Switch */}
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
>>>>>>> af8608d (first commit)
        </div>
      </NavbarContent>
    </NextUINavbar>
  );
};