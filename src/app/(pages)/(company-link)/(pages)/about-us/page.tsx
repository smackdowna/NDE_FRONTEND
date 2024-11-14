const AboutUs = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 xl:gap-9">
      <div className="flex flex-col gap-3">
        <span className="font-900 text-primary-500 text-xl md:text-2xl xl:text-3xl">
          We&apos;re serious about changing the way business work
        </span>
        <p className="text-base md:text-lg font-400 text-start">
          We give businesses a helping hand, so they can get more done with less
          stress.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-900 text-primary-500 text-[20px] md:text-[24px] xl:text-[30px]">
          About Usdf
        </span>
        <p className="text-base md:text-lg font-400">
          Now Digital Easy is the daughter company of Iaaxin Tech Labs, a
          leading software development company that believes that digital
          transformation should be easy and trouble-free.
          <br /> We&apos;re making digital transformation wonderfully easy and want a
          world with millions of organizations enjoying the benefits of going
          digital first.
        </p>
      </div>
      {[
        {
          title: "Who We Are",
          content: `We Now Digital Easy, we take our goals and aspirations seriously!`,
        },
        {
          title: "Our Mission",
          content: `Our mission is to empower businesses to thrive in the digital age through user-friendly solutions and exceptional support.`,
        },
        {
          title: "Our Vision",
          content: `We see a future where businesses leverage the cloud to achieve smarter, more efficient management.`,
        },
        {
          title: "Our Team",
          content: `At Now Digital Easy, we believe in working hard and partying even harder! We are a team of over 50+ developers, marketers, strategists and creatives. The collective team experience, brainstorming, and hard work allows us to find novel solutions for everything!`,
        },
      ].map((item, i) => (
        <div key={i} className="">
          <span className="font-900 text-primary-500 text-xl ">
            {item.title}:{"  "}
          </span>
          <p className="text-base font-400 inline">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
