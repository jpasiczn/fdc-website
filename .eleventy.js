module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "brand-kit": "assets/logo" });
  eleventyConfig.addPassthroughCopy({ "brand/fdc-logo-icon.svg": "assets/logo/fdc-logo-icon.svg" });

  eleventyConfig.addFilter("phoneLink", phone => phone.replace(/\D/g, ""));
  eleventyConfig.addFilter("jsonLDString", obj => JSON.stringify(obj, null, 2));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "xml"],
    htmlTemplateEngine: "njk"
  };
};
