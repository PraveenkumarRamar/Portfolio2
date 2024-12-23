module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image file types
        type: "asset/resource", // Use asset/resource to handle files
      },
    ],
  },
};
