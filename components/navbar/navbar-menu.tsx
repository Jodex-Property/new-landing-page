'use client'

import { useState } from "react"
import { ArrowUpRight, Search, X } from "lucide-react"
import Image from "next/image"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const NavMenu = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  return (
    <div className="bg-muted">
      <nav className="fixed top-6 z-10 inset-x-4 sm:inset-x-6 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-xl">
        <div className="flex flex-wrap items-center justify-between px-4 py-4 sm:py-5">
          {/* Logo and Search */}
          <div className="flex items-center gap-4 sm:gap-10 md:gap-40 w-full md:w-auto justify-between md:justify-start">
            <Image
              src="/img/jodex-logo-main.svg"
              alt="Jodex Logo"
              width={64}
              height={64}
              className="shrink-0"
            />

            {/* Desktop search bar */}
            <div className="relative hidden md:block">
              <Search className="w-5 h-5 absolute inset-y-0 my-auto left-3 text-muted-foreground" />
              <Input
                placeholder="Search for apartment..."
                className="pl-10 w-[240px] sm:w-[280px] bg-slate-100/70 dark:bg-slate-800 border-none shadow-none rounded-full"
              />
            </div>

            {/* Mobile search toggle */}
            <div className="md:hidden">
              <Button
                size="icon"
                className="bg-muted text-foreground hover:bg-accent shadow-none rounded-full"
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                aria-label={mobileSearchOpen ? "Close search" : "Open search"}
              >
                {mobileSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="flex items-center mt-4 md:mt-0">
            <Button
              className="rounded-full bg-[#020749] hover:bg-[#efde3c] hover:text-gray-900 transition-colors"
              id="services-features"
            >
              Get Started <ArrowUpRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        {mobileSearchOpen && (
          <div className="px-4 pb-4 md:hidden">
            <div className="relative">
              <Search className="w-5 h-5 absolute inset-y-0 my-auto left-3 text-muted-foreground" />
              <Input
                autoFocus
                placeholder="Search for apartment..."
                className="pl-10 w-full bg-slate-100/70 dark:bg-slate-800 border-none shadow-none rounded-full"
              />
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
