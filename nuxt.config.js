module.exports = {
    srcDir: 'src/',
    plugins: ['~/plugins/vue-resource'],
    router: {
        middleware: 'checkTheme',
        mode:'hash'
    },
    build: {
        
        extend(config, { isDev, isClient }) {
            // ...
        }
    }
}