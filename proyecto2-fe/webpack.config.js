const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    // Esto hace que ts-loader procese también los bloques TS en archivos .vue
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        hot: true,
    },
};
