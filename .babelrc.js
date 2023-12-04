module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "16",
        },
      },
    ],
  ],
  // Not needed globally, only in specific tests
  /*
  plugins: [
    "@babel/plugin-transform-react-jsx",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
  ],
  */
};
