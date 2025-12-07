"use client";

import { Menu, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogIn, User } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="w-full h-16 border-b bg-background flex items-center">
      {/* Left: Mobile menu */}
      <Button variant="ghost" size="icon" className="hidden">
        <Menu className="w-5 h-5" />
      </Button>

      {/* Middle: Search */}
      <div className="ml-4 hidden md:flex flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-10" />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Theme Toggle */}

        {/* Notifications */}
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer p-5">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback className={"mr-5"}>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-50">
            <Link href={"/components/pageprofile"}>
              <DropdownMenuItem className={"cursor-pointer"}>
                Profile
              </DropdownMenuItem>
            </Link>
            <Link href={"/components/profile"}>
              <DropdownMenuItem className={"cursor-pointer"}>
                Settings
              </DropdownMenuItem>
            </Link>
            <Link href={"../login"}>
              <DropdownMenuItem className={"cursor-pointer"}>
                Logout
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
