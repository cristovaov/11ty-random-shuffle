const { shuffle } = require("./_11ty/filters/random-shuffle.js");

module.exports = function (eleventyConfig) {
	// Add shuffle as filter.
	eleventyConfig.addFilter("shuffle", shuffle);

	return {
		dir: {
			input: "src",
			output: "dist",
			data: "_data",
			includes: "_includes"
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md"]
	}
};
