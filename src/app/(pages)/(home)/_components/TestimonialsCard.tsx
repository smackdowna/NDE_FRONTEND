import Image from "next/image";
import comma from "@/assets/images/Quotation-Symbol-PNG-Clipart.png";
import { TESTIMONIALS } from "@/assets/data/testmonials";
import { twMerge } from "tailwind-merge";

type Props = (typeof TESTIMONIALS)[number] & {
  index: number;
};

const TestimonialCard = (props: Props) => {
  const isLarge = props.index === 0 || props.index === 3;
  const width = {
    card: isLarge ? " w-[54%] max-lg:w-[400px] max-xl:w-[630px] max-md:w-full max-2xl:w-[750px] " : " w-[40%] max-2xl:w-[500px] max-lg:w-[320px] max-xl:w-[350px] max-md:w-full",
    quote: isLarge ? "w-[180px] max-lg:w-[120px]" : "w-[150px] max-lg:w-[120px]",
  };
  return (
    <div
      className={twMerge(
        "relative w-full flex flex-col group max-lg:mx-0  max-md:p-3 max-md:mx-0   hover:bg-[#C9CDFF]  xl:px-12 md:p-8 overflow-hidden bg-[#ECEDFF]",
        width.card
      )}
    >
      <Image
        className="absolute right-0 top-0 max-md:w-[90px] max-md:group-hover:scale-110  w-[151px] md:group-hover:scale-110 aspect-square object-contain object-right"
        src={props.backgroundImage}
        alt="Testimonial background"
      />
      <div className="mb-1.5">
        <Image
          src={comma}
          width={30}
          height={30}
          alt="Quote symbol"
          className=" max-md:w-[18px]"
        />
      </div>
      <div className={twMerge("w-[68%] max-w-[calc(100%-100px)] xl:max-w-[calc(100%-150px)] max-md:text-[12px] mb-20 max-lg:mb-10")}>
        <span className="text-[30px] max-md:text-sm max-2xl:text-[20px] text-home-heading font-roboto-serif font-500 ">
          {props.quote.length > 130
            ? `${props.quote.slice(0, 130)}...`
            : props.quote}
        </span>
      </div>
      <div className="flex flex-col mt-auto">
        <span className="text-[22px] max-2xl:text-[18px] max-xl:text-[14px] font-900 font-roboto  text-home-heading">
          {props.author}
        </span>
        <span className="text-[15px] max-2xl:text-[12px] max-xl:text-[10px] max-sm:text-[8px] font-roboto-serif text-home-body ">{props.position}</span>
      </div>
    </div>
  );
};
export default TestimonialCard;