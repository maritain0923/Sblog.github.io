/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // 中文用衬线体，英文用无衬线
        sans: ['"Noto Serif SC"', '"LXGW WenKai"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        latin: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        // 主题色 - 可以在这里换颜色
        // 目前：温暖米白 + 深蓝灰外框 + 赭石强调色
        frame:   '#1e2330',   // 外框深色背景
        paper:   '#fdfcfa',   // 内容区底色
        ink:     '#1a1a1a',   // 主文字
        sub:     '#5c5c5c',   // 次级文字
        faint:   '#9a9a9a',   // 淡文字/日期
        line:    '#e8e5df',   // 分割线/边框
        accent:  '#b5502a',   // 强调色（赭石）
        accentL: '#f5ece8',   // 强调色浅背景
      },
    },
  },
  plugins: [],
};
