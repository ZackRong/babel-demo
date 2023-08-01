module.exports = {
  presets: [
    ["@babel/env", {
      targets: {
        // "firefox": "27",
        "chrome": "60"
      },
      useBuiltIns: 'entry',
      modules: false
    }]
  ],
  plugins: []
}
