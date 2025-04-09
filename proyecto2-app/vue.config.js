module.exports = {
    chainWebpack: config => {
        config.entry('app').clear().add('./src/main.ts')
    },
    configureWebpack: {
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.json']
        }
    }
}
