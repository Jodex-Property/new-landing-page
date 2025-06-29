import { ArrowUpRight, Search } from "lucide-react"
import Image from "next/image"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Logo from "./logo"
import { NavMenu } from "./navigation-bar"
import NavigationSheet from "./navigation-sheet"


export const NavBar = () => {
    return (
        <div className="bg-muted">
            <nav className="fixed top-6 z-10 inset-x-6 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-xl">
                <div className="h-full flex items-center justify-between mx-auto px-4 py-5">
                   <Logo />
                   <NavMenu className="hidden md:block"/>

                    <div className="flex items-center">
                        <Button className="rounded-full bg-[#020749] cursor-pointer hover:bg-[#efde3c] hover:text-gray-900" id="services-features">
                            See Listings <ArrowUpRight />
                        </Button>
                    </div>
                    <div className="md:hidden">              
                        <NavigationSheet />           
                    </div>
                </div>
            </nav>
        </div>
    )
}