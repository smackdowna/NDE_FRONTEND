import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

// Define the type for card data
type CardData = {
  imgSrc: string;
  title: string;
  description: string;
};

const cardData: CardData[] = [
  {
    imgSrc: ICONS.brand,
    title: "Boost productivity with employee tracking.",
    description: "Streamline workflows and boost productivity with advanced CRM analytics."
  },
  {
    imgSrc: IMAGES.cardbrand,
    title: "Bring your Business Online",
    description: "Take your business online and reach customers worldwide."
  },
  {
    imgSrc: IMAGES.cardbrand1,
    title: "Understand your customers' needs.",
    description: "Gain deep insights into customer needs to tailor your offerings effectively."
  },
  {
    imgSrc: IMAGES.cardbrand2,
    title: "Show your brand to more people",
    description: "Enhance brand visibility and connect with more potential customers daily."
  },
  {
    imgSrc: IMAGES.cardbrand3,
    title: "Maximise leads and conversions",
    description: "Optimize your efforts to generate high-quality leads and increase sales."
  },
  {
    imgSrc: IMAGES.cardbrand4,
    title: "Maximise leads and conversions",
    description: "Foster stronger relationships with personalised interactions across various channels."
  },
  {
    imgSrc: IMAGES.cardbrand5,
    title: "Engage your customers",
    description: "Foster stronger relationships with personalised interactions across various channels."
  },
  {
    imgSrc: IMAGES.cardbrand6,
    title: "Leverage Data-Driven Decisions",
    description: "Use advanced analytics to make informed decisions and drive growth."
  },
];

// Define the type for Button props
type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button className="bg-white w-[150px] text-[15px] border-[2px] text-[#0011FF] font-700 border-[#0011FF] p-2 rounded-2xl">
    <span className="">{text}</span>
  </button>
);

// Define the type for Card props
type CardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const Card: React.FC<CardProps> = ({ title, description, imgSrc }) => (
  <div className='bg-[#FFFBF0] w-full  rounded-[10px] group pt-4 hover:scale-105  p-4 hover:border-[#0011FF] hover:border-[2px] duration-300'>
    <Image src={imgSrc} alt={title} className="" />
    <div className="flex gap-4 mt-3">
      <span className="text-[22px] max-sm:text-[18px] text-home-heading leading-[28.13px] tracking-tighter font-900 w-[300px] h-[56px] ">{title}</span>
    </div>
    <div className="text-[#000334] font-serif tracking-tighter hover:opacity-60 mt-3 group text-[17px]  font-400 w-[280px] max-2xl:w-[200px]">
      <span>{description}</span>
    </div>
  </div>
);

const Organization: React.FC = () => {
  return (
    <div className="bg-[#ECEDFF]">
      <div className='p-10 max-md:p-6  max-sm:p-1 pb-10'>
        <div className='flex justify-center mt-10'>
          <span className="text-[43px] max-md:text-2xl text-center max-lg:text-[34px] leading-[51.6px] text-home-heading font-900">
            Grow your organization faster than ever
          </span>
        </div>
        <div className='flex justify-center mt-4'>
          <div className='bg-border-image-source w-[850px] max-lg:w-[670px] max-md:hidden h-2'></div>
        </div>
        <div className='flex justify-center mt-10 max-md:mt-4'>
          <span className='text-center text-[20px] font-roboto-serif font-500 w-[550px]'>
            Empower and take your business to the next level with our comprehensive approach.
          </span>
        </div>
        <div className="flex justify-center max-lg:mx-1">
          <div className="flex gap-4 mt-8 overflow-x-scroll hide-scrollbar">
            {["Domain", "Hosting", "Website Builder", "Marketing Studio", "Google Ads", "Vision Now", "Mails Now", "Chat Now", "Nmail", "Spot Now", "Peoples Now"].map((text) => (
              <div key={text}>
                <Button text={text} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mx-20 max-2xl:mx-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Organization;
