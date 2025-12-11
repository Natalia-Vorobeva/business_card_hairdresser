// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',      // Очень маленькие смартфоны
        'sm': '640px',      // Смартфоны
        'md': '768px',      // Планшеты
        'lg': '1024px',     // Ноутбуки
        'xl': '1280px',     // Десктопы
        '2xl': '1536px',    // Большие экраны
      },
      spacing: {
        '2.5': '0.625rem',   // 10px
        '3.5': '0.875rem',   // 14px
      },
      fontSize: {
        'xxs': '0.625rem',   // 10px
      },
    },
  },
	variants: {
    extend: {
      opacity: ['xs'],       // Добавляем xs вариант для opacity
      width: ['xs'],         // Добавляем xs вариант для width
      height: ['xs'],        // Добавляем xs вариант для height
      marginLeft: ['xs'],    // Добавляем xs вариант для margin-left
      padding: ['xs'],       // Добавляем xs вариант для padding
      fontSize: ['xs'],      // Добавляем xs вариант для font-size
    },
  },
  plugins: [],
}