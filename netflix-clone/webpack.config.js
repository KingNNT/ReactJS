const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const devMode = false;

module.exports = {
    mode: devMode ? "development" : "production",
    entry: [
        "./src/scss/index.scss",
        "./src/scss/row.scss",
        "./src/scss/App.scss",
    ],

    output: {
        filename: "bundle.min.js.txt",
        path: path.resolve(__dirname, "src/dist"),
        library: "mylib",
        libraryTarget: "var",
    },

    module: {
        rules: [
            {
                // Thiết lập build scss
                test: /\.(sa|sc)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        // Interprets CSS
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                        },
                    },
                    {
                        // minify CSS và thêm autoprefix
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",

                            // Đặt chế độ tối ưu
                            plugins: devMode
                                ? () => []
                                : () => [
                                      postcssPresetEnv({
                                          browsers: [">1%"],
                                      }),
                                      require("cssnano")(),
                                  ],
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },

    plugins: [
        // Xuất kết quả với CSS - sau khi qua loader MiniCssExtractPlugin.loader
        new MiniCssExtractPlugin({
            filename: devMode ? "css/site.css" : "css/site.min.css",
        }),
    ],
};
