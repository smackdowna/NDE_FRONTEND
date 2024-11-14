const PrivacyPolicy = () => {
  const privacyPolicies = [
    {
      title: "Section 1 - Consent",
      contents: [
        "How do you get my consent.",
        "When you provide us with personal information to complete a transaction, verify your credit card, place an order, we imply that you consent to our collecting it and using it for that specific reason only.",
        "If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.",
        "How do I withdraw my consent?",
        "If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us at digital@nowdigitaleasy.com or mailing us at: 76D/1 R.R Complex, New, Salem Bypass Rd, Karur, Tamil Nadu 639002."
      ]
    },
    {
      title: "Section 2 - Disclosure",
      contents: [
        "We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service."
      ]
    },
    {
      title: "Section 3 - Payment",
      contents: [
        "We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.",
        "Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.",
        "PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers. For more insight, you may also want to read terms and conditions of Razorpay on https://razorpay.com"
      ]
    },
    {
      title: "Section 4 - Third-Party",
      contents: [
        "In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.",
        "However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.",
        "For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.",
        "In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.",
        "Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service."
      ]
    },
    {
      title: "Section 5 - Security",
      contents: [
        "To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed."
      ]
    },
    {
      title: "Section 6 - Cookies",
      contents: [
        "We use cookies to maintain the session of your user. It is not used to personally identify you on other websites."
      ]
    },
    {
      title: "Section 7 - Age Consent",
      contents: [
        "By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site."
      ]
    },
    {
      title: "Section 8 - Policy Changes",
      contents: [
        "We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.",
        "If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at digital@nowdigitaleasy.com or mailing us at: Now Digital Easy, 76D/1 R.R Complex, New, Salem Bypass Rd, Karur, Tamil Nadu 639002."
      ]
    }
  ];

  const makeLinksClickable = (text : string) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
    
    const parts = text.split(/(https?:\/\/[^\s]+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g);
    
    return parts.map((part, index) => {
      if (part.match(urlPattern)) {
        return (
          <a key={index} href={part} className="text-base text-[#000659] underline font-400 inline" target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      } else if (part.match(emailPattern)) {
        return (
          <a key={index} href={`mailto:${part}`} className="text-base text-[#000659] underline font-400 inline">
            {part}
          </a>
        );
      } else {
        return part;
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-9 md:gap-[42px]">
      <p className="text-base font-400 inline drop-shadow-2xl">
      When you browse our site, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
                  </p>
      <p className="text-base font-400 inline drop-shadow-2xl">
      When you purchase something from us, as part of the buying and selling process, we collect the personal information you give us such as your name, address, and email address.
                  </p>
      <p className="text-base font-400 inline drop-shadow-2xl">
      Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.
                  </p>
        {privacyPolicies.map((policy, i) => (
          <div key={i} className="flex flex-col gap-5">
            {policy.title && (
              <span className="font-900 text-primary-500 text-xl">
                {policy.title}
              </span>
            )}
            <div className="flex flex-col gap-4 md:gap-6 xl:gap-9">
              {policy.contents &&
                policy.contents.map((list, i) => (
                  <p key={i} className="text-base font-400 inline">
                    {makeLinksClickable(list)}
                  </p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
