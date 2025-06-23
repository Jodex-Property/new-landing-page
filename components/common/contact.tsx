import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center py-10 sm:py-16 bg-image-contact">
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-10 z-[2] relative">
      <b className="text-white">Contact Us</b>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
        Chat to our friendly team
      </h2>
      <p className="mt-3 text-base sm:text-lg text-white">
        We&apos;d love to hear from you. Please fill out this form or shoot us
        an email.
      </p>
      <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-white">Email</h3>
            <p className="my-2.5 text-white">
              Our friendly team is here to help.
            </p>
            <Link
              className="font-medium text-white break-all"
              href="mailto:info@jodex.net"
            >
              info@jodex.net
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-white">Live chat</h3>
            <p className="my-2.5 text-white">
              Our friendly team is here to help.
            </p>
            <Link className="font-medium text-white" href="#">
              Start new chat
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-white">Office</h3>
            <p className="my-2.5 text-white">
              Come say hello at our office HQ.
            </p>
            <Link
              className="font-medium text-white"
              href="https://map.google.com"
              target="_blank"
            >
              Abuja | Lagos
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-white">Phone</h3>
            <p className="my-2.5 text-white">
              Mon-Fri from 8am to 5pm.
            </p>
            <Link
              className="font-medium text-white break-all"
              href="tel:+2345550000000"
            >
              +234 (555) 000-0000
            </Link>
          </div>
        </div>

        {/* Form */}
        <Card className="bg-[#efde3c] shadow-none border-none">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="col-span-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    placeholder="First name"
                    id="firstName"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    placeholder="Last name"
                    id="lastName"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="mt-1.5 bg-white shadow-none"
                    rows={6}
                  />
                </div>
                <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" className="border-white" />
                  <Label htmlFor="acceptTerms">
                    You agree to our{" "}
                    <Link href="#" className="underline">
                      terms and conditions
                    </Link>
                    .
                  </Label>
                </div>
              </div>
              <Button className="mt-6 w-full bg-[#020749] font-bold cursor-pointer hover:bg-[#020749]/90" size="lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact;
