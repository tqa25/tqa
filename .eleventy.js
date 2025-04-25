module.exports = function(eleventyConfig) {
  // Copy thư mục 'img' và 'css' sang thư mục output (_site)
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  // Cho phép sử dụng {{ year }} trong template
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: ".",       // Thư mục gốc là input
      includes: "_includes", // Thư mục chứa includes
      data: "_data",       // Thư mục chứa data
      output: "_site"      // Thư mục output (kết quả build)
    },
    templateFormats: ["md", "njk", "html"], // Các định dạng template xử lý
    markdownTemplateEngine: "njk", // Cho phép dùng Nunjucks trong Markdown
    htmlTemplateEngine: "njk",     // Dùng Nunjucks cho file HTML
    dataTemplateEngine: "njk",    // Dùng Nunjucks cho file data (ít dùng)
  };
};