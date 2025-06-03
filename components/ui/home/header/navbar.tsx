"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../../button";
import ToogleMode from "./toggle-mode";
import { Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import SearchInput from "./search-input";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Abc
                </span>
                <span className="text-foreground">blog</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/articles"
              className="text-sm font-medium hover:text-foreground"
            >
              Articles
            </Link>
            <Link
              href="/tutorials"
              className="text-sm font-medium hover:text-foreground"
            >
              Tutorials
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-foreground"
            >
              Dashboard
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <SearchInput />
            <ToogleMode />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <SignInButton>
                <Button variant={"outline"}>Login</Button>
              </SignInButton>
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 flex flex-col gap-2">
            <Input
              type="text"
              name="search"
              className="pl-10  focus-visible:ring-1"
              placeholder="Search articles..."
            />
            <Link
              href="/articles"
              className="block py-2 px-4 text-sm font-medium hover:bg-muted rounded-md"
            >
              Articles
            </Link>
            <Link
              href="/tutorials"
              className="block py-2 px-4 text-sm font-medium hover:bg-muted rounded-md"
            >
              Tutorials
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 text-sm font-medium hover:bg-muted rounded-md"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 px-4 text-sm font-medium hover:bg-muted rounded-md"
            >
              Dashboard
            </Link>
            <div className="mt-2 flex flex-col gap-2 px-4">
              <Button variant="outline">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
