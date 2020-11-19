const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const devMode = false;

module.exports = {
    mode: devMode ? "development" : "production",
    entry: [
        "./src/scss/App.scss",
        "./src/scss/Banner.scss",
        "./src/scss/index.scss",
        "./src/scss/Nav.scss",
        "./src/scss/Row.scss",
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
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
};
