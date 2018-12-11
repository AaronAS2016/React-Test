const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/js/index.js'),
        test: path.resolve(__dirname, 'src/js/test.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer:{
        port: 8080
    },
    module:{
        rules: [
            /* Aqui iran los loaders  */
            {
                //En test va que archivos quiero reconocer
                // Que loaders se va a encargar del archivo
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    use: "css-loader"
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
}

/**Para usar una config que no este en el mismo directorio usar --config ./{ruta}  y utilizar el modulo path de NodeJS*/