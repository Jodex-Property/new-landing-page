import { ArrowUpRight, Search } from "lucide-react"
import Image from "next/image"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


export const NavMenu = () => {
    return (
        <div className="bg-muted">
            <nav className="fixed top-6 z-10 inset-x-6 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-xl">
                <div className="h-full flex items-center justify-between mx-auto px-4 py-5">
                    <div className="flex items-center gap-40 md:gap-80">
                        <Image src="/img/jodex-logo-main.svg" alt="" width={80} height={80} className="shrink-0" />
                        <div className="relative hidden md:block">
                            <Search className="w-5 h-5 absolute inset-y-0 my-auto left-2.5" />
                            <Input placeholder="search for apartment..." className="pl-10 flex-1 bg-slate-100/70 dark:bg-slate-800 border-none shadow-none w-[280px] rounded-full" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Button size="icon" className="bg-muted text-foreground hover:bg-accent shadow-none rounded-full md:hidden">
                            <Search className="!w-5 !h-5" />
                        </Button>
                        <Button className="rounded-full bg-[#020749] cursor-pointer hover:bg-[#efde3c] hover:text-gray-900" id="services-features">
                            Get Started <ArrowUpRight />
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}