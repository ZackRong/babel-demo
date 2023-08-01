module.exports = {
  presets: [
    ["@babel/env", {
      targets: {
        "firefox": "27",
      },
    }]
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ]
}
