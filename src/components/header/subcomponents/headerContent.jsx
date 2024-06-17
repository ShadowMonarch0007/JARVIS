"use client";
import React, { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Image from "next/image";
import brainwave from "@/components/assets/brainwave.svg";
import { navigation } from "@/components/data";
import Button from "@/components/header/subcomponents/Button";
import MenuSvg from "@/components/assets/svg/MenuSvg";
import { HamburgerMenu } from "@/components/ui/Header";
import Logo from "./logo";
import Link from "next/link";

export default function HeaderContent(){
  const [openNavigation, setOpenNavigation] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Set initial hash value
    setCurrentHash(window.location.hash);

    // Function to handle hash change
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Add event listener for hash change
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-[#252134] lg:darkbg-[#0E0C15]/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-[#0E0C15]" : "bg-[#0E0C15]/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-[1.875rem] xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" href="#hero">
          <Logo/>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#0E0C15] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-[#AC6AFF] ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-[0.0625rem] lg:text-xs lg:font-semibold ${
                  item.url === currentHash ? "z-2 lg:text-white" : "lg:text-white/50"
                } lg:leading-5 lg:hover:text-white  xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-xs font-bold text-white/50 transition-colors hover:text-white lg:block font-code uppercase"
        >
          New account
        </a>
        <Button className="hidden lg:flex text-xs font-bold font-code uppercase" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

