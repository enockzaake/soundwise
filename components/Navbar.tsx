import React from "react";
import Logo from "./Logo";
import { AuthButton } from "./AuthButton";
import { ToggleTheme } from "./toggle-theme";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex bg-black items-center justify-between text-white py-4 px-24">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="">Premium</Link>
        <Link href="">Support</Link>
      </ul>
      <div className="flex items-center gap-2">
        <AuthButton />
        <ToggleTheme />
      </div>
    </div>
  );
}
