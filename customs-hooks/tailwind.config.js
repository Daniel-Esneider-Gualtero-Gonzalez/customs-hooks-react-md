/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*jsx"],
  theme: {
    extend: {
      boxShadow: {
        'unknow': '0 -4px 6px -1px rgba(255, 255, 255), 4px 0 6px -1px rgba(255, 255, 255), 0 4px 6px -1px rgba(255, 255, 255), -4px 0 6px -1px rgba(255,255,255)',
        'dead': '0 -4px 6px -1px rgba(245, 5, 5), 4px 0 6px -1px rgba(245, 5, 5), 0 4px 6px -1px rgba(245, 5, 5), -4px 0 6px -1px rgba(245, 5, 5)',
        'alive': '0 -4px 6px -1px rgba(2, 250, 23), 4px 0 6px -1px rgba(2, 250, 23), 0 4px 6px -1px rgba(2, 250, 23), -4px 0 6px -1px rgba(2, 250, 23)',
        
      },
    },
  },
  plugins: [],
}

