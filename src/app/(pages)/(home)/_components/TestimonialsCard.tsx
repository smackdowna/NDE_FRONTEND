import Image from "next/image";
import comma from "@/assets/images/Quotation-Symbol-PNG-Clipart.png";
import { TESTIMONIALS } from "@/assets/data/testmonials";
import { twMerge } from "tailwind-merge";

type Props = (typeof TESTIMONIALS)[number] & {
  index: number;
};

const TestimonialCard = (props: Props) => {

  return (
    <div className="relative w-full flex flex-col group max-lg:mx-0  max-md:p-3 max-md:mx-0   hover:bg-[#C9CDFF] xl:px-12 md:p-8 overflow-hidden bg-[#ECEDFF]">
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
        <p className="text-left">
          {props.quote.length > 130
            ? `${props.quote.slice(0, 130)}...`
            : props.quote}
        </p>
      </div>
      <div className="flex flex-col mt-auto">
        <span className="testimonial-author">
          {props.author}
        </span>
        <span className="testimonial-company">{props.position}</span>
      </div>
    </div>
  );
};
export default TestimonialCard;