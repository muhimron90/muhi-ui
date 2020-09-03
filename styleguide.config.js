const path = require('path')
const { version, description } = require('./package.json')
const documentsMd = require('./docs')
module.exports = {
    title: description,
    version,
    components: 'src/components/[A-Z]**/*.js',
    webpackConfig: require('./config/webpack/webpack.config.js'),
    sections: documentsMd,
    moduleAliases: {
        'muhi-ui': path.resolve(__dirname, 'src/components/'),
    },
}
