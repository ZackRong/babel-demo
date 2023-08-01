module.exports = {
  presets: [
    // ["@babel/env", {
    //   targets: {
    //     "chrome": "60",
    //   },
    // }]
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", {
      "corejs": 3
    }]
  ]
}
