"use client";
import React, { useState } from "react";

function Navigation() {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <nav className="laptop:h-[100px] h-[57px] justify-between flex py-7 items-center desktop2k:px-[130px] desktop:px-[80px] px-[14px]">
      {/* Navigation Menu Desktop Version */}
      <ul
        className={
          openMobileMenu
            ? `flex flex-col bg-white fixed w-full z-50 rounded-2xl gap-4 px-0 left-0 items-center py-4 top-0`
            : `hidden laptop:flex desktop2k:gap-12 laptop:gap-6 items-center`
        }
      >
        {openMobileMenu && (
          <li
            className="w-full text-right pr-6"
            onClick={() => {
              setOpenMobileMenu(false);
            }}
          >
            <span className="text-2xl">X</span>
          </li>
        )}
        <li>
          <a href="" aria-label="Logo">
            <img
              className="z-10 relative"
              src="/images/monito-logo.svg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-label="Home"
            className="text-base text-dark-blue-00 font-bold"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-label="Category"
            className="text-base text-dark-blue-00 font-bold"
          >
            Category
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-label="About"
            className="text-base text-dark-blue-00 font-bold"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-label="Contact"
            className="text-base text-dark-blue-00 font-bold"
          >
            Contact
          </a>
        </li>
      </ul>
      {/* Navigation Menu Mobile Version */}
      <ul className="flex laptop:hidden justify-between items-center w-full">
        <li
          onClick={() => {
            setOpenMobileMenu(true);
          }}
        >
          <img
            className="hover:cursor-pointer"
            src="/images/menu-hamburger-icon.svg"
            alt=""
          />
        </li>
        <li>
          <a href="" aria-label="Logo">
            <img
              className="z-10 relative"
              src="/images/monito-logo.svg"
              alt=""
            />
          </a>
        </li>
        <li>
          <img
            className="hover:cursor-pointer"
            src="/images/menu-search-icon.svg"
            alt=""
          />
        </li>
      </ul>

      {/* Navigation Search Component */}
      <div className="hidden laptop:flex gap-[14px] h-[44px]">
        <div className="relative">
          <input
            type="text"
            className="pt-3 pb-3 pl-12 laptop:w-[220px] desktop:w-[280px] text-sm rounded-[48px] border border-slate-400 font-medium text-neural-color-40"
            placeholder="Search something here!"
          />
          <div className="absolute inset-y-1 pl-4 left-0 flex items-center pointer-events-none">
            <img
              className=" text-neural-color-60"
              src="/images/search-icon.svg"
              alt=""
            />
          </div>
        </div>
        <a
          href=""
          aria-label="Join the community"
          className="text-neural-color-00 text-nowrap font-bold text-base rounded-[57px] bg-dark-blue-00 py-[10px] px-7"
        >
          Join the community
        </a>
        <div className="flex gap-1 p-2 items-center">
          <div className="flex gap-[6px]">
            <img src="/images/star-icon.svg" alt="" />
            <p className="text-base font-medium text-dark-blue-80">VND</p>
          </div>
          <img
            className="hover:cursor-pointer"
            src="/images/arrow-icon.svg"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
