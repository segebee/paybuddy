import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

const benefitOne = {
  title: "Why PayBuddy?",
  desc: "PayBuddy is all you need as a web3 professional in Africa. It is deeply integrated into the payment networks and provides banking services with a core focus on customer satisfaction.",
  image: "/img/benefit-one.png",
  bullets: [
    {
      title: "De-centralized Bank",
      desc: "Come with your wallet. We do not keep customer funds, so you are always safe!",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Swap",
      desc: "Easily swap across fiat and crypto currencies. USDC, USDT, USD, EUR, GBP.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Cards and US Bank Accounts",
      desc: "Get cards that worrk 100% of the time. Get US Virtual accounts to receive payments",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: "/img/benefit-two.png",
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
