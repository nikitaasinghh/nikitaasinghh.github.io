/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // fontFamily: {
    //   Macondo : ['Macondo', 'cursive']
    // },
    screens:{
      'small':'0px'
    },
    extend: {
      backgroundImage: {
        'greyy': "url('/static/grey-bg.jpg')",
      },
    },
  },
  plugins: [],
}
