import * as icons from './technologies'
export const technologiesIcons = {
  frontend: {
    react: { svg: icons.react, skill: 'React', color: '#61dafb', link: 'https://reactjs.org' },
    next: { svg: icons.nextjs, skill: 'NextJS', color: '#000000', link: 'https://nextjs.org/' },
    redux: { svg: icons.redux, skill: 'Redux', color: '#764abc', link: 'https://redux.js.org/' },
    typeScript: { svg: icons.typescript, skill: 'TypeScript', color: '#2376c5', link: 'https://www.typescriptlang.org/' },
    javaScript: { svg: icons.javascript, skill: 'JavaScript', color: '#efd81d', link: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
    html: { svg: icons.html, skill: 'HTML5', color: '#dd4b25', link: 'https://developer.mozilla.org/es/docs/Web/HTML' },
    css: { svg: icons.css, skill: 'CSS3', color: '#1f6db9', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    scss: { svg: icons.sass, skill: 'SASS', color: '#d25191', link: 'https://sass-lang.com/' },
    styledComponent: {svg: <p>{'< 💅 >'}</p>,skill: 'StyledComponent',color: '#e6658e', link: 'https://styled-components.com/' },
    tailwindcss: {svg: icons.tailwindcss,skill: 'Tailwind CSS',color: '#0099ff', link: 'https://tailwindcss.com/' },
    graphQL: { svg: icons.graphql, skill: 'GraphQL', color: '#e10098', link: 'https://graphql.org/' },
    electron:{
      svg: <p>Electronjs</p>,
      skill: 'Electronjs',
      color: '#9ee9f8',
      link: 'https://www.electronjs.org/',
    }
  },
  backend: {
    node: { svg: icons.node, skill: 'NodeJS', color: '#78c83a', link: 'https://nodejs.org/en/' },
    mongoDB: { svg: icons.mongodb, skill: 'MongoDB', color: '#378d4d', link: 'https://www.mongodb.com/' },
    express: { svg: icons.express, skill: 'ExpressJS', color: '#000000', link: 'https://expressjs.com/' },
    mongoose: { svg: <p>mongoose</p>, skill: 'MongooseJS', color: '#841400', link: 'https://mongoosejs.com/' },
    firebase: { svg: <p>Firebase</p>, skill: 'Firebase', color: '#fea611', link: 'https://firebase.google.com/' },
  },
}
