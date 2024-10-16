import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import './style.css'

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
    description: "Track field employees in real-time to improve efficiency and productivity."
  },
  {
    imgSrc: IMAGES.cardbrand,
    title: "Bring your Business Online",
    description: "Establish a robust online presence and reach a global audience effortlessly."
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
    description: "Integrate and automate tasks to ensure smooth and efficient business operations."
  },
  {
    imgSrc: IMAGES.cardbrand4,
    title: "Maximise leads and conversions",
    description: "Optimize your efforts to generate high-quality leads and increase sales."
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
  <button className="bg-white w-fit whitespace-nowrap text-[15px] border-[2px] text-[#0011FF] font-700 border-[#0011FF] p-2 rounded-2xl">
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
  <div className='org-card bg-[#FFFBF0] max-2xl:rounded-[10px] max-2xl:h-[275px] group pt-4 p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative cursor-pointer overflow-hidden lg:h-[220px] rounded-md'>
    <div className='absolute inset-0 rounded-0 border-2 border-transparent transition-colors duration-300 pointer-events-none group-hover:border-[#0011FF]'></div>
    <div className='relative z-10'>
      <Image src={imgSrc} alt={title} className="" />
      <div className="flex gap-4 mt-3">
        <span className="text-[22px] max-sm:text-[18px] max-2xl:text-[24px] 2xl:text-[26px] text-home-heading leading-[28.13px] tracking-tighter font-900 max-lg:text-[24px]">{title}</span>
      </div>
      <div className="tracking-tighter group-hover:opacity-60 mt-2 transition-opacity duration-300">
        <span className="sub-para  block whitespace-pre-wrap w-full">{description}</span>
      </div>
    </div>
  </div>
);

const Organization: React.FC = () => {
  return (
    <section className="organization bg-[#ECEDFF] flex flex-col gap-[20px] items-center">
        <div className="w-full">
          <div className='flex justify-center w-[90%] mx-auto'>
            <h2 className="text-home-heading">
              Grow your organization faster than ever
            </h2>
          </div>
          <div className=' flex justify-center mt-2'>
            <div className='bg-border-image-source w-[90%] h-[5px] mx-auto'></div>
          </div>
        </div>
        <div className='flex justify-center max:mt-4'>
          <p className="text-center text-home-body">
            Empower and take your business to the next level with our comprehensive approach.
          </p>
        </div>
        <div className="flex w-[100%] justify-center max-lg:mx-1 max:mt-4">
          <div className="flex gap-4 overflow-x-scroll hide-scrollbar items-center">
            {["Domain", "Hosting", "Website Builder", "Marketing Studio", "Google Ads", "Vision Now", "Mails Now", "Chat Now", "Nmail", "Spot Now", "Peoples Now"].map((text) => (
              <div className="" key={text}>
                <Button text={text} />
              </div>
            ))}
          </div>
        </div>
        <div className=" justify-between grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 md:gap-[16px] lg:gap-[20px] max-sm:gap-x-[40px] max-sm:gap-y-[30px] sm:gap-x-[16px] sm:gap-y-[30px] mt-10">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
            />
          ))}
        </div>
    </section>
  );
};
export default Organization;
