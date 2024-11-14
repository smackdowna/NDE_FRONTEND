/* eslint-disable react/no-unescaped-entities */

const RefundPolicy = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 xl:gap-9">
      <div className="flex flex-col gap-3">
        <p className="text-base font-400 inline">
          At Now Digital Easy, we’re confident that you will love the efficiency
          and simplicity our platform offers to your business. That's why we
          offer a no string attached 15-day trail. This extensive trial period
          allows you to fully explore all the features Now Digital Easy has to
          offer and see how it can transform your business. 
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-900 text-[#000659] text-xl">Please Note:</span>
        <p className="text-base md:text-lg font-400 inline">
          Due to the nature of our digital service, we are unable to offer
          refunds on our subscriptions.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-base md:text-lg font-400">
          However, our 15-day trial provides ample time to:
        </p>
      </div>
      {[
        {
          title: 'Test-drive all features',
          content: `Dive deep into all aspects of the platform and see how it can streamline your specific tasks. `,
        },
        {
          title: 'Import your data',
          content: `Get a feel for how seamlessly Now Digital Easy integrates with your existing data and workflows. `,
        },
        {
          title: 'Experience the support',
          content: `Our dedicated support team is available throughout your trial period to answer any questions and smooth onboarding experience.`,
        },
      ].map((item, i) => (
        <div key={i} className="">
          <li>
            <span className="font-900 text-[#000659] text-xl">
              {item.title}:
            </span>
            <p className="text-base md:text-lg font-400 inline">{item.content}</p>
          </li>
        </div>
      ))}
      <div className="flex flex-col gap-3">
        <p className="text-base font-400 inline">
          By the end of 15 days, we are confident you will be Now Digital Easy
          family. But if for any reason the application does not meet your
          needs, you can simply do your trial before the billing period starts
          and avoid any charges.
        </p>
      </div>
      <div>
        <span className="font-900 text-[#000659] text-[30px]">
          Ready to unlock a new level of efficiency?
        </span>
        <p className="text-base md:text-lg font-400 inline">
          Sign up for your free 15-day trial today and experience the Now
          Digital Easy difference!
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
