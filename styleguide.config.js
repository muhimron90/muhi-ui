const { version, description } = require('./package.json')
const documentsMd = require('./docs')
const config = require('./config/webpack/webpack.config.js')

module.exports = {
    title: description,
    version,
    components: 'src/components/**/[A-Z]*.js',
    webpackConfig: config,
    sections: documentsMd,
    styleguideDir: 'docs',
    theme: {
        fontFamily: {
            base: '"Fira Sans", sans-serif',
        },
    },
    styles: {
        Logo: {
            logo: {
                color: 'white',
            },
        },
    },
}
