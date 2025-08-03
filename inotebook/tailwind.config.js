/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#073b4c",   
          accent: "gray", 
          light: "#E8DECE",  
          login:"#E5DFDF",
          navbar:"#B1785E",
         
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(0deg,#4A403A,#322C2B,#040303,#0C0C0C)',
        'brand-about': ' radial-gradient(circle,#62b6cb,#003049)',
         'sticky_note': 'radial-gradient(circle,#97abb1,#82a6b1,#856a5d)',
         'edit_note': 'radial-gradient(circle,#ccdde2,#97abb1,#82a6b1)',
      },
    },
  },
  plugins: [],
}
