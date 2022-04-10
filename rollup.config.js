export default {
    input: "build/index.js",
    output: [
      {
        file: "lib/bundle.cjs.js",
        format: "cjs",
      },
      {
        file: "lib/bundle.esm.js",
        format: "es",
      },
    ],
    plugins: [
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript"),
        }),
    ]
  };