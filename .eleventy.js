const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const mathjaxPlugin = require("eleventy-plugin-mathjax");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const timeToRead = require("eleventy-plugin-time-to-read");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(UpgradeHelper);
  eleventyConfig.addPassthroughCopy("src/assets/js/fontawesome.js");
  eleventyConfig.addPassthroughCopy("src/assets/css/prism.css");
  eleventyConfig.addPassthroughCopy("src/assets/css/prism-okaidia.css");
  eleventyConfig.addPassthroughCopy("src/assets/images/*");
  eleventyConfig.addPassthroughCopy("src/assets/post-content/**/*");

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
  // eleventyConfig.addPlugin(EleventyPluginCodeDemo, {
  //   name: "codeDemo",
  //   renderDocument: ({ html, css, js }) => `
  //   <!DOCTYPE html>
  //   <html>
  //     <head>
  //       <style>${css}</style>
  //     </head>
  //     <body>
  //       ${html}
  //       <script>${js}</script>
  //     </body>
  //   </html>`,
  //   iframeAttributes: {
  //     height: "100%",
  //     style: "width: 100%;",
  //     frameborder: "0",
  //   },
  // });

  eleventyConfig.addPlugin(timeToRead, {
    speed: "200 words a minute",
    style: "short",
    minutes: true,
    seconds: false,
    digits: 1,
    output: function (data) {
      return data.timing;
    },
  });
  // eleventyConfig.addTransform("htmlmin", function (content) {
  //   // Prior to Eleventy 2.0: use this.outputPath instead
  //   if (this.outputPath && this.outputPath.endsWith(".html")) {
  //     let minified = htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true,
  //       minifyCSS: true,
  //       minifyJS: true,
  //       useShortDoctype: true,
  //     });
  //     return minified;
  //   }

  //   return content;
  // });

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
