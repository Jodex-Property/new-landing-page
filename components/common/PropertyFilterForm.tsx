"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

// Schema
const formSchema = z.object({
  location: z.string().min(1, "Location is required"),
  type: z.string(),
  bedrooms: z.string(),
  minPrice: z.string(),
  maxPrice: z.string(),
  furnishing: z.string(),
  servicing: z.string(),
  shared: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function PropertyFilterForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      type: "flat",
      bedrooms: "3",
      minPrice: "800000",
      maxPrice: "2000000",
      furnishing: "furnished",
      servicing: "any",
      shared: "any",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card className="max-w-xl mx-auto p-6 py-12">
       <h1 className="mt-6 mb-6  max-w-[20ch] text-4xl  font-bold text-[#020749] !leading-[1.2] tracking-tight">
          Smart Renting Made Simple.
        </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-4">
          {/* Location */}
          <div className="flex items-center gap-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register("location")} placeholder="Lagos" />
            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
          </div>

          {/* Type */}
          <div className="flex items-center gap-2">
            <Label htmlFor="type">Type</Label>
            <Select onValueChange={(val) => setValue("type", val)} defaultValue="flat">
              <SelectTrigger id="type" className="w-full">
                <SelectValue placeholder="Flat / Apartment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flat">Flat / Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center gap-2">
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Select onValueChange={(val) => setValue("bedrooms", val)} defaultValue="3">
              <SelectTrigger id="bedrooms" className="w-full">
                <SelectValue placeholder="3" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((n) => (
                  <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Min Price */}
          <div className="flex items-center gap-2">
            <Label htmlFor="minPrice">Min Price</Label>
            <Select onValueChange={(val) => setValue("minPrice", val)} defaultValue="800000">
              <SelectTrigger id="minPrice" className="w-full">
                <SelectValue placeholder="₦800,000" />
              </SelectTrigger>
              <SelectContent>
                {["400000", "600000", "800000", "1000000"].map((price) => (
                  <SelectItem key={price} value={price}>
                    ₦{Number(price).toLocaleString()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Max Price */}
          <div className="flex items-center gap-2">
            <Label htmlFor="maxPrice">Max Price</Label>
            <Select onValueChange={(val) => setValue("maxPrice", val)} defaultValue="2000000">
              <SelectTrigger id="maxPrice" className="w-full">
                <SelectValue placeholder="₦2 Million" />
              </SelectTrigger>
              <SelectContent>
                {["1500000", "2000000", "2500000", "3000000"].map((price) => (
                  <SelectItem key={price} value={price}>
                    ₦{Number(price).toLocaleString()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Furnishing */}
          <div className="flex items-center gap-2">
            <Label htmlFor="furnishing">Furnishing</Label>
            <Select onValueChange={(val) => setValue("furnishing", val)} defaultValue="furnished">
              <SelectTrigger id="furnishing" className="w-full">
                <SelectValue placeholder="Furnished" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="furnished">Furnished</SelectItem>
                <SelectItem value="unfurnished">Unfurnished</SelectItem>
                <SelectItem value="partly-furnished">Partly Furnished</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Servicing */}
          <div className="flex items-center gap-2">
            <Label htmlFor="servicing">Servicing</Label>
            <Select onValueChange={(val) => setValue("servicing", val)} defaultValue="any">
              <SelectTrigger id="servicing" className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="serviced">Serviced</SelectItem>
                <SelectItem value="not-serviced">Not Serviced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Shared */}
          <div className="flex items-center gap-2">
            <Label htmlFor="shared">Shared</Label>
            <Select onValueChange={(val) => setValue("shared", val)} defaultValue="any">
              <SelectTrigger id="shared" className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit */}
          <div className="flex">
            <Button type="submit"  className="w-full cursor-pointer bg-[#020746] hover:bg-[#efde3c] hover:text-gray-900">Search</Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
