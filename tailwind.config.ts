import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        home: {
          primary: "#0011FF",
          secondary: "#FFB700",
          heading: "#000659",
          body: "#000334",
          "bg-linear": "#D2D5FD,#D8DAF8,#EFE8E7,#FEF6E2",
          "secondary-card": "#FFFBF0",
          "primary-card": "#ECEDFF",
        },
        domain: {
          primary: "#0011FF",
          heading: "#000659",
          body: "#000334",
          "bg-banner-linear": "#F1F7FF,#B2D1FE",
          "secondary-card": "#FFFBF0",
          "primary-card": "#EFF5FF",
        },
        gsuite: {
          primary: "#0066FF",
          secondary: "#009952",
          heading: "#000659",
          body: "#000334",
          "bg-banner": "#009952,#009952,#0066FF",
          "secondary-card": "#FFFBF0",
          "primary-card": "#ECEDFF",
          "cta-button": "#0066FF,#00CC6E",
        },
      },
      backgroundImage: {
        "background-SpotNow-gettingStarted": "linear-gradient(172.91deg, rgba(215, 214, 251, 0.6) 5.54%, rgba(208, 255, 229, 0.6)  94.47%)",
        "background-SpotNow": "linear-gradient(172.91deg, rgba(208, 255, 229, 0.6) 5.54%, rgba(215, 214, 251, 0.6) 94.47%)",
        "background-Gsuite-banner": "linear-gradient(270.23deg, #0066FF 0.38%, #009952  99.99%)",
        "background-Gsuite": "linear-gradient(270.23deg, #009952 0.38%, #0066FF  99.99%)",
        "background-reason": "linear-gradient(180deg, #01A9A9  0%, #0164F9  100%)",
        "background-button": "linear-gradient(265.93deg, #00A7A7 0%, #0066FF 100%)",
        "gradient-hosting-hero":"linear-gradient(291.46deg, #C5FFFF 35.97%, #B8D4FF 64.77%)",
        "gradient-domain-hero":"linear-gradient(0deg, #F1F7FF 0%, #B2D1FE 100%)",
        "gradient-acc1": "linear-gradient(90.37deg, #D2D5FD 0.32%, #D8DAF8 22.3%, #EFE8E7 49.57%, #FEF6E2 99.68%)",
        "gradient-acc": "linear-gradient(180deg, #FCF2E3 0%, #D3D6FD 100%)",
        "gradient-footer": "linear-gradient(0deg, #C9CCFF 0%, #A2A9FF 51.5%, #A2A9FF 100%)",
        "background-take": "linear-gradient(275.8deg, #CFD2FF 1.51%, #E4E6FF 48.1%, #F3F3FF 55.68%, #FEF3E3 100%)",
        "border-image-source": "linear-gradient(90deg, #0011FF 0%, #FBF1E5 100%)",
        "background": "linear-gradient(90.37deg, #D2D5FD 0.32%, #D8DAF8 22.3%, #EFE8E7 49.57%, #FEF3E2 99.68%)",
        "gradient-button": "linear-gradient(90deg, rgba(0, 17, 255, 0.9) 0%, rgba(255, 183, 0, 0.9) 100%)",
        "gradient-light": "linear-gradient(90.37deg, #D2D5FD 0.32%, #D8DAF8 22.3%, #EFE8E7 49.57%, #FEF3E2 99.68%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        'roboto-serif': ["Roboto Serif", "serif"],
        'roboto-slab': ["Roboto Slab", "serif"],
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        750: "750",
        800: "800",
        900: "900",
      },
    },
  },
  plugins: [],
};

export default config;
