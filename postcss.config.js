const tailwind = require('tailwindcss')

const IS_DEV = process.env.NODE_ENV === 'production'

const plugins = [tailwind]

if (!IS_DEV) {
    const purgecss = require('@fullhuman/postcss-purgecss')

    class TailWindExtractor {
        static extract(context) {
            return context.match(/[A-z0-9-:\/]+/g) || [];
        }
    }
    plugins.push(
        purgecss({
            content: ['src/*.html', 'src/*.js', 'src/*.tsx'],
            extractors: [
                {
                    extractor: TailWindExtractor,
                    extensions: ['html', 'js']
                }
            ]

        })

    )
}

module.exports = {
    plugins: plugins
}