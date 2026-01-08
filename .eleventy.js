module.exports = function (eleventyConfig) {
  // Copy /css/* to /docs/css/*
  eleventyConfig.addPassthroughCopy("css");

  return {
    pathPrefix: "/blues-retreat-belgium/",    
    dir: {
      output: "docs"
    }
  };
};