"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { ICONS } from "@/assets";
const TabNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="h-fit md:w-[200px] md:min-w-[200px] lg:min-w-[275px]">
      <div className="flex gap-3 flex-col w-full md:w-[200px] lg:w-[275px]">
        {[
          {
            label: "About Us",
            href: "/about-us",
          },
          {
            label: "Contact Us",
            href: "/contact-us",
          },
          {
            label: "Privacy Policy",
            href: "/privacy-policy",
          },
          {
            label: "Refund Policy",
            href: "/refund-policy",
          },
          {
            label: "Payment Option",
            href: "/payment-option",
          },
          {
            label: "Usage Terms",
            href: "/usage-terms",
          },
        ].map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={twMerge(
              "min-w-fit py-2 md:py-4 px-4 rounded-lg flex justify-between",
              pathname === tab.href
                ? "bg-[#0011FF] text-white"
                : "bg-white text-black"
            )}
          >
            <span>{tab.label}</span>
            <Image
              src={ICONS.arrow2}
              alt="arrow"
              height={24}
              width={24}
              className={twMerge(pathname === tab.href ? "invert-0" : "invert")}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
