"use client";

import Link from "next/link";
import { Route } from "@/routers/types";
import { usePathname } from "next/navigation";
import React from "react";

export const Nav = () => {
  const pathname = usePathname();

  // Oddiy string[] bo'lishi kerak
  const listNav: string[] = [
    "/account",
    "/account-savelists",
    "/account-password",
    "/account-billing",
  ];

  return (
    <div className="container">
      <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
        {listNav.map((item) => {
          const isActive = pathname === item;

          // O'zbekcha label
          let label = item;
          if (item === "/account") label = "Profil";
          else if (item === "/account-savelists") label = "Saqlanganlar";
          else if (item === "/account-password") label = "Parol";
          else if (item === "/account-billing") label = "To'lovlar";
          else label = item.replace("-", " ").replace("/", " ");

          return (
            <Link
              key={item}
              href={item as Route}
              className={`block py-5 md:py-8 border-b-2 flex-shrink-0 capitalize ${
                isActive
                  ? "border-primary-500 font-medium"
                  : "border-transparent"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
