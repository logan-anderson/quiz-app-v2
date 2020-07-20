class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}
const tailwind = require('tailwindcss')

const IS_DEV = process.env.NODE_ENV === 'production'

const plugins = [tailwind]


module.exports = {
    plugins: [
        // require('postcss-import'),
        // require('postcss-nested'),
        // require('postcss-preset-env')({
        //     browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
        // }),
        require('tailwindcss'),
        process.env.NODE_ENV === 'production'
            ? require('postcss-purgecss')({
                content: ['./src/index.html'],
                extractors: [
                    {
                        extractor: TailwindExtractor,
                        extensions: ["html", "js"]
                    }
                ]
            })
            : function () {
                return []
            }
    ]
}