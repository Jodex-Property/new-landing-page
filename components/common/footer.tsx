
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
// import Image from "next/image";

const footerLinks = [
  {
    title: "Terms of Service",
    href: "#",
  },
  {
    title: "FAQs",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Privacy",
    href: "#",
  },
];

const FooterComps= () => {
  return (
    <div className="bg-[#020749] flex flex-col">

      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-10">
            <div>
              {/* Logo 
              <Image src="/img/jodex-logo-white.svg" alt="jodex logo" width={100} height={100} />*/}
              <ul className="mt-10 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-gray-300 hover:text-[#efde3c]"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-semibold text-gray-300">Stay up to date!!</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input type="email" placeholder="Enter your email" className="text-gray-300" />
                <Button className="bg-[#efde3c] text-gray-900 font-bold hover:bg-background cursor-pointer">Subscribe</Button>
              </form>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-10">
            {/* Copyright */}
            <span className="text-gray-300">
              &copy; {new Date().getFullYear()}{" "} |{" "}
              <Link href="/" target="_blank">
                jodex.net
              </Link>
              . All rights reserved.
            </span>

            {/*<div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>*/}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComps;
