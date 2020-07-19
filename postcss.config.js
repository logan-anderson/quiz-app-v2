const tailwind = require('tailwindcss')

const IS_DEV = process.env.NODE_ENV === 'production'

const plugins = [tailwind]

if (!IS_DEV) {

}

module.exports = {
    plugins: plugins
}