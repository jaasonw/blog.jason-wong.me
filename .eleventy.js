const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const mathjaxPlugin = require("eleventy-plugin-mathjax");
const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/js/fontawesome.js");
  eleventyConfig.addPassthroughCopy("src/assets/css/prism.css");
  eleventyConfig.addPassthroughCopy("src/assets/css/prism-okaidia.css");
  eleventyConfig.addPassthroughCopy("src/assets/images/*");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(mathjaxPlugin, {
    output: "svg",
    chtml: {
      scale: 1.2,
      fontURL:
        "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
    },
    svg: {
      scale: 1.2,
    },
  });
  eleventyConfig.addTransform("htmlmin", function (content) {
    // Prior to Eleventy 2.0: use this.outputPath instead
    if (this.outputPath && this.outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        useShortDoctype: true,
      });
      return minified;
    }

    return content;
  });

  // add anchors to blog headers
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.linkInsideHeader({
      placement: "after",
    }),
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
