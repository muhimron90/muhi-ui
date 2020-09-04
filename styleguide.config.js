const path = require('path')
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
        color: {
            base: '#013444',
            link: '#51B64B',
            linkHover: '#2992D0',
            sidebarBackground: '#013444',
        },
        fontFamily: {
            base: '"Open Sans", sans-serif',
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
