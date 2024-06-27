/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      titlexl: "36px",
      titlelg: "22px",
      titlemd: "20px",
      titlesm: "18px",
      titlexs: "16px",
      textxl: "20px",
      textlg: "18px",
      textmd: "17px",
      textsm: "16px",
      textxs: "15px",
      linksm: "16px",
      linkxs: "14px",
    },

    extend: {
      colors: {
        grayish: "#ebedee",
        whitish: "#F5F5F5",
      },
    },
    fontFamily: {
      Ubuntu: "Ubuntu",
      Anton: ["Anton", "sans-serif"],
    },
  },
  plugins: [],
};
