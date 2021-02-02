const path = require("path");

module.exports = {
    // モードを production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "production", // "production" | "development" | "none"

    entry: "./src/case4_webpack/js/index.js",

    output: {
        path: path.join(__dirname, "dist"),
        filename: "./case4_webpack/js/index.js",
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
