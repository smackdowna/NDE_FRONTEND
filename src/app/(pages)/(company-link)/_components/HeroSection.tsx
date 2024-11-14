"use client";

import { usePathname } from "next/navigation";

const HeroSection = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1]
    .split("-")
    .map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #D2D5FD 1%, #D5D7FB 22.23%, #EFE8E7 49%, #FEF3E2 99%)",
      }}
      className="w-full h-[250px] md:h-[320px] flex items-center justify-center text-[#000659] text-3xl sm:text-3xl md:text-3xl xl:text-6xl font-900"
    >
      {lastPart}
    </div>
  );
};

export default HeroSection;
