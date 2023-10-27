const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        ertebat: {
          primary: "#5659A9",

          secondary: "#8183BF",

          accent :"#A4A5D1" ,

          neutral: "#262626",

          base :"#E8E4E1" ,

          "base-100": "#f2f2f2",

          info: "#71B2F4",

          success: "#71F49D",

          error: "#F47E71",
        },
      },
      ["light", "dark"],
    ],
  },
  plugins: [require("daisyui")],
});
