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
<<<<<<< HEAD
  <div className='bg-[#FFFBF0] w-full max-2xl:text-rounded-[10px] max-2xl:w-[275px] max-2xl:h-[275px] group pt-4 hover:scale-105  p-4 hover:border-[#0011FF] hover:border-[2px] duration-300'>
    <Image src={imgSrc} alt={title} className="" />
    <div className="flex gap-4 mt-3  max-2xl:w-[251px]">
      <span className="text-[22px] max-sm:text-[18px] max-2xl:text-[24px] 2xl:text-[26px] text-home-heading leading-[28.13px] tracking-tighter font-900 w-[300px] h-[56px] max-lg:text-[24px]">{title}</span>
    </div>
    <div className=" max-2xl:pt-4 text-[#000334] font-serif tracking-tighter max-2xl:text-[15px] hover:opacity-60 mt-3 group text-[17px] 2xl:text-[20px]  font-400 w-[280px] max-lg:text-[15px] max-2xl:w-[200px]">
=======
  <div className='bg-[#FFFBF0] w-full  rounded-[10px] group pt-4 hover:scale-105  2xl:p-4 xl:p-[7px] max-xl:p-[1rem] hover:border-[#0011FF] hover:border-[2px] duration-300'>
    <Image src={imgSrc} alt={title} className="" />
    <div className="flex gap-4 mt-3">
      <span className=" text-home-heading 2xl:text-[26px] 2xl:leading-[31.2px] max-2xl:text-[24px] max-2xl:leading-[28.13px] tracking-tighter font-900 w-[300px] h-[56px] ">{title}</span>
    </div>
    <div className="text-[#000334] font-serif tracking-tighter hover:opacity-60 mt-[1.5rem] group 2xl:text-[20px] 2xl:leading-[33px] max-2xl:leading-[24.75px] max-2xl:text-[15px]  font-400 w-[280px] max-2xl:w-[200px]">
>>>>>>> da38895b6b15751ac72f59c460660fb1f2e955bc
      <span>{description}</span>
    </div>
  </div>
);

const Organization: React.FC = () => {
  return (
    <div className="bg-[#ECEDFF]">
      <div className='p-[2rem] max-md:p-6  max-sm:p-1 pb-10'>
        <div className='flex justify-center mt-10'>
          <span className=" text-center 2xl:text-[64px] 2xl:leading-[76.8px] xl:text-[43px] xl:leading-[51.6px] md:text-[38px] md:leading-[45.6px] max-md:text-[26px] max-md:leading-[31.2px] text-home-heading font-900">
            Grow your organization faster than ever
          </span>
        </div>
        <div className='flex justify-center mt-4'>
          <div className='bg-border-image-source w-[850px] max-lg:w-[750px] 2xl:w-[1300px] max-md:hidden h-2'></div>
        </div>
        <div className='flex justify-center mt-10 max-md:mt-4'>
          <span className='text-center 2xl:text-[22px] 2xl:leading-[36.3px] max-2xl:text-[17px] max-2xl:leading-[28.05px]  font-roboto-serif font-400 '>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mx-20 max-2xl:mx-8 max-lg:pb-[3rem] ">
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
