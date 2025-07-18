/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#D51B53",
        primaryDark: "#7F1032",
        textDarkColor: "#353546",
        textLightColor: "#858597",
        backgroundColor: "#F7F8FC",
        backgroundColor2: "#DFE0EB",
        backgroundColor3: "#9393A3",
        menuIconBackground: "#EAEAFF",
        borderColorLight: "#B8B8D2",
        sidebarBorderColor: "#E6E6E6",
        primary_3: "rgb(213,27,83, 3%)",
        notificationIconColor: "#AAACBD",
        successGreen: "#00BF63",
        modalBackground: "#911259",
        progressBarBackgroundColor: "#F4F3FD",
        footerBackground: "#263238",
      },
    },
  },
  plugins: [],
}
