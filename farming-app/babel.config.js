// babel.config.js
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  generatorOpts: {
    compact: false,
    jsescOption: {
      minimal: true
    }
  }
};