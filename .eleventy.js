const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy("src/assets/css/markdown.css");
  eleventyConfig.addPassthroughCopy("src/assets/images/*");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(mathjaxPlugin, {
    output: "chtml",
    chtml: {
      scale: 1.2,
      fontURL:
        "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
    },
  });
  // eleventyConfig.addCollection("posts", function (collection) {
  //   return collection.getFilteredByGlob("/src/posts/*.md");
  // });
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
