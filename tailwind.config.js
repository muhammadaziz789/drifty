module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        minDesktop: "1200px",
        tablet: "1135px",
        ipod: "980px",
        mobile: "768px",
        small: "540px",
        extraSmall: "400px",
      },
      colors: {
        gray: "#5c5c5c",
        grayDark: "#2e2e2e",
        grayLight: "#ebebeb",
        main: '#00a8e8',
        black: '#5a5a5a',
        mainBackground: "#fafafa",
        grayLighter: "#5a5a5a55",
        fire: "#ff7512",
        primary: "#5086ec",
        yellow: "#ffa500",
        border: "#d9d9d9",
        
        light: "#fff",
        lightBase: "#F4F4F4",
        baseBlack: "#181729",
        blackLight: "#151515",
        dark: "#000",
        blackLighter: "#424242",
        blackDarker: "#171717",


        darkGray: "#545B6B",
        lighterGray: "#79829A",
        grayDarker: "#A4AFC1",
        graySecondry: "#9092A3",
        graySecondryLighter: "#9092A31F",
        grayThird: "#F2F2F4",
        grayThirdLigher: "#707282",
        grayThirdDarker: "#C7C8D8",
        grayFourth: "#2D3E51",
        grayFourthLigher: "#D5DDE9",
        grayFourthDarker: "#7A859C",
        grayFifth: "#b9bfc5",
        grayFifthLigher: "#E0E2E6",
        grayFifthDarker: "#D3D3D3",
        ink: "#5122D6",

        borderDarker: "#e6ebf8",
        borderLighter: "#F2F4F8",
        borderSecondry: "#dfd8ed",
        yellowLight: "#FFB800",
        error: "#ed0101",
        success: "#22c55e",
      },
    },
  },
  plugins: [],
};
