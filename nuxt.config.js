module.exports = {
    srcDir: 'src/',
    plugins: ['~/plugins/vue-resource'],
    router: {
        middleware:'checkTheme'
    },
    build: {
        
        extend(config, { isDev, isClient }) {
            // ...
        }
    }
}