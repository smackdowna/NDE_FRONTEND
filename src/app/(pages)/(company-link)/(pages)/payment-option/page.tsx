/* eslint-disable react/no-unescaped-entities */


const PaymentOption = () => {
  return <div className="flex flex-col gap-4 md:gap-6 xl:gap-9">
    <p className="text-base md:text-lg font-400">
    At Now Digital Easy, we understand the importance of a smooth and secure payment process. That’s why we offer a variety of payment options to fit your organization needs.
        </p>

        <h1 className="font-900 text-[#000659] text-xl md:text-2xl xl:text-3xl">
        Here's how you can easily pay for your Now Digital Easy services:
        </h1>

        {/* <div className="flex flex-col gap-4 md:gap-6 xl:gap-9"> */}
        {[
        {
          title: "Credit Cards",
          content: `We accept all major credit cards for your convenience.`,
        },
        {
          title: "Debit Cards",
          content: `Use your preferred debit card for a quick and secure transaction.`,
        },
        {
          title: "UPI",
          content: `Pay directly from your bank account using the UPI for a seamless experience.`,
        },
        {
          title: "PayPal",
          contentList: [
            ' If you prefer PayPal, you can securely check out using your existing account.',
            'Whichever method you choose, you can be assured of a safe and encrypted transaction.',
            'Ready to transform your organization into a digital-first company?',
            'Select your Now Digital Easy plan and choose your preferred payment option during checkout.'
          ],
        },
      ].map((item, i) => (
        <div key={i} className="">
          <span className="font-900 text-[#000659] text-xl ">
            {item.title}:{"  "}
          </span>
          <p className="text-base md:text-lg font-400 inline">{item.content && item.content}</p>
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-9">
          {item.contentList && item.contentList.map((list, i) => 
          <p key={i} className="text-base md:text-lg font-400 inline">{list}</p>
          )}
          </div>
          
        </div>
      ))}
        {/* </div> */}


<div className="flex flex-col gap-4 md:gap-6 xl:gap-9">
          <span className="font-900 text-[#000659] text-xl">
           Still have questions?
          </span>
          <p className="text-base font-400 inline">Our friendly customer support team is happy to help. Contact us today!</p>
          </div>
          

  </div>
};

export default PaymentOption;
