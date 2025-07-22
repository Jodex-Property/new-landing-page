"use client";

import React, { useState } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {motion} from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Slider } from "../ui/slider";

const checkBox = ({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: () => void;
}) => (
  <CheckboxPrimitive.Root
    checked={checked}
    onCheckedChange={onCheckedChange}
    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

const sharedApartments = [
  {
    id: 1,
    location: "Abuja",
    price: 2000000,
    amenities: ["WiFi", "Laundry"],
    image: "/img/gallery/5.jpg",
  },
  {
    id: 2,
    location: "Abuja",
    price: 1800000,
    amenities: ["Gym", "Parking"],
    image: "/img/gallery/5.jpg",
  },
  {
    id: 3,
    location: "Lagos",
    price: 1500000,
    amenities: ["WiFi"],
    image: "/img/gallery/5.jpg",
  },
  {
    id: 4,
    location: "Abuja",
    price: 500000,
    amenities: ["Laundry", "Gym"],
    image: "/img/gallery/4.jpg",
  },
];

const allAmenities = ["WiFi", "Laundry", "Gym", "Parking"];
const ITEMS_PER_PAGE = 2;

const SearchSharedApartment = () => {
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState(sharedApartments);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = sharedApartments.filter((apt) => {
      const matchesQuery =
        apt.location.toLowerCase().includes(query.toLowerCase());
      const matchesPrice = apt.price >= priceRange[0] && apt.price <= priceRange[1];
      const matchesAmenities = selectedAmenities.every((amenity) =>
        apt.amenities.includes(amenity)
      );
      return matchesQuery && matchesPrice && matchesAmenities;
    });
    setFiltered(results);
    setCurrentPage(1);
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedResults = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  return (
    <div className="max-w-3xl mx-auto p-0">
      <form onSubmit={handleSearch} className="space-y-4 mb-6">
        <div className="flex gap-2">
          <Input
            placeholder="Search by location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-[#020749] hover:bg-[#efde3c] hover:text-[#020749] cursor-pointer">Search</Button>
        </div>

        {/*<div>
          <label className="block text-sm font-medium mb-1">Price Range: ₦{priceRange[0]} - ₦{priceRange[1]}</label>
          <Slider
            min={0}
            max={200000}
            step={50}
            value={priceRange}
            onValueChange={(value: any) => setPriceRange(value as [number, number])}
          />
        </div>*/}

        <div>
          <label className="block text-sm font-medium mb-2">Amenities</label>
          <div className="grid grid-cols-2 gap-2">
            {allAmenities.map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedAmenities.includes(amenity)}
                  onCheckedChange={() => toggleAmenity(amenity)}
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </form>

      {/*<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paginatedResults.map((apt) => (
          <motion.div
            key={apt.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="rounded-2xl shadow-md overflow-hidden">
              <Image src={apt.image} alt="Jodex Shared Apartment" width={400} height={300} className="w-full object-cover" />
              <CardContent className="p-4 space-y-2">
                
                <p className="text-muted-foreground">Location: {apt.location}</p>
                <p className="text-muted-foreground">Price: ₦{apt.price}</p>
                <p className="text-muted-foreground text-sm">Amenities: {apt.amenities.join(", ")}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>*/}
    </div>
  );
};

export default SearchSharedApartment;
