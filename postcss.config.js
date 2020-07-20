// class TailwindExtractor {
//     static extract(content) {
//         return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
//     }
// }
const tailwind = require('tailwindcss')

// const IS_DEV = process.env.NODE_ENV === 'production'

const plugins = [tailwind]


// module.exports = {
//     plugins: [
//         require('postcss-import'),
//         require('postcss-nested'),
//         require('postcss-preset-env')({
//             browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
//         }),
//         require('tailwindcss'),
//         process.env.NODE_ENV === 'production'
//             ? require('postcss-purgecss')({
//                 content: ['./index.html'],
//                 extractors: [
//                     {
//                         extractor: TailwindExtractor,
//                         extensions: ["html", "js"]
//                     }
//                 ]
//             })
//             : function () {
//                 return []
//             }
//     ]
// }
















// class TailwindExtractor {
//     static extract(content) {
//         return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
//     }
// }


// const plugins = [
//     require('tailwindcss'),
//     process.env.NODE_ENV === 'production'
//         ? require('postcss-purgecss')({
//             content: ['./src/index.html', './src/*', './src/**/*'],
//             extractors: [
//                 {
//                     extractor: TailwindExtractor,
//                     extensions: ["html", "js", "tsx"]
//                 }
//             ]
//         })
//         : function () {
//             return []
//         }
// ]

// // if (process.NODE_ENV === 'production') {
//     plugins.push(
//         require('postcss-import'),
//         require('postcss-nested'),
//         require('postcss-preset-env')({
//             browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
//         }))
// }

module.exports = {
    plugins,
}


// const purgecss = require('@fullhuman/postcss-purgecss');

// module.exports = {
//   style: {
//     postcss: {
//       plugins: [
//         purgecss({
//           content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
//         }),
//       ],
//     },
//   },
// };
