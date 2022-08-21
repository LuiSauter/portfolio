import { technologiesIcons } from '../icons/SkillsIcons'
const {
  css,
  graphQL,
  html,
  javaScript,
  next,
  react,
  redux,
  scss,
  styledComponent,
  tailwindcss,
  typeScript,
  electron
} = technologiesIcons.frontend
const { express, firebase, mongoDB, mongoose, node } = technologiesIcons.backend
export const technologies = [
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'NextJS',
  'Redux',
  'ExpressJS',
  'NodeJS',
  'MongoDB',
  'MongooseJS',
  'Firebase',
  'StyledComponent',
  'Tailwind CSS',
  'Pug',
  'HTML5',
  'CSS3',
  'SCSS',
]
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    title: 'Landing page',
    description: 'Landing page for my github',
    image: '/images/landingpage.jpg',
    url: 'LuiSauter/landingpage',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [html, css],
  },
  {
    title: 'Gallery',
    description: 'Project made with pure vanila js',
    image: '/images/gallery.jpg',
    url: 'LuiSauter/gallery',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [html, scss, javaScript],
  },
  {
    title: 'Notes App',
    description:
      'This project is a practice of a full stack bootcamp with technologiesIcons MernStack.',
    image: '/images/noteapp.jpg',
    url: 'LuiSauter/spa-notes-app',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [javaScript, react, node, express, mongoDB, mongoose],
  },
  {
    title: 'Search Giffs',
    description: 'Online gifs search engine with react and giphy api.',
    image: '/images/gifs.jpg',
    url: 'LuiSauter/search-gifs',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [
      react,
      javaScript,
      styledComponent,
      redux,
      node,
      express,
      mongoose,
      mongoDB,
    ],
  },
  {
    title: 'My favorite videos',
    description: 'Web application with react to save your favorite videos! :D.',
    image: '/images/favoritevideos.jpg',
    url: 'LuiSauter/my-favorite-videos',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [
      react,
      typeScript,
      styledComponent,
      mongoDB,
      mongoose,
      node,
      express,
    ],
  },
  {
    title: 'Disneyplus clone',
    description:
      'Disney clone is a project only for development practices and above all for fun :D.',
    image: '/images/disneyplus.jpg',
    url: 'LuiSauter/disney-clone',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [react, javaScript, styledComponent, firebase, redux],
  },
  {
    title: 'Bookend',
    description:
      'Bookend is a web application to share books and it was thanks to the idea that arose when I was looking to carry out fullstack development practices',
    image:
      'https://raw.githubusercontent.com/LuiSauter/bookend/main/public/images/bookend-demo.jpg',
    url: 'LuiSauter/bookend',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [
      react,
      next,
      typeScript,
      graphQL,
      mongoose,
      mongoDB,
      tailwindcss,
      express,
    ],
  },
  {
    title: 'bookend-android-ios',
    description:
      'React Native CLI - This is a cross-platform mobile app of bookend app - free books for everyone 📚',
    image:
      'https://raw.githubusercontent.com/LuiSauter/bookend/main/public/images/bookend-demo.jpg',
    url: 'LuiSauter/bookend-android-ios',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [react, graphQL, mongoose, mongoDB],
  },
  {
    title: 'Discordia',
    description: 'Discord-clone for educational purposes and fun! 👨🏻‍💻',
    image: '',
    url: 'LuiSauter/discordia',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [react, javaScript, tailwindcss, firebase, redux],
  },
  {
    title: 'Discordia backend',
    description: 'Database for Discordia (Discord clone)',
    image: '',
    url: 'LuiSauter/discordia-backend',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [node, typeScript, mongoose, mongoDB],
  },
  {
    title: 'Markdown preview',
    description:
      'Markdown Preview is an fast editor of markdown with preview document - Desktop ✨',
    image: '',
    url: 'rundevs/markdown-preview/development',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [node, typeScript, javaScript, react, electron, css],
  },
  {
    title: 'Rundev - web',
    description:
      'Markdown Preview, JavaScript & other Languages in run-time sparkles',
    image: '',
    url: 'rundevs/rundev/development',
    authors: [{ name: 'sauterdev', image: '/sauterdev.jpg' }],
    tags: [javaScript, next, react, css],
  },
]
