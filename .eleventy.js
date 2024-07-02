const { shuffle } = require("./_11ty/filters/random-shuffle.js");
const debug = require("./_11ty/filters/debug.js");

module.exports = function (eleventyConfig) {
	// Add shuffle as filter.
	eleventyConfig.addFilter("shuffle", shuffle);

	// Add debug filters.
	eleventyConfig.addFilter("inspect", debug.inspect);
	eleventyConfig.addFilter("keys", debug.keys);

	// Sample collection.
	eleventyConfig.addCollection("posts", function (collectionApi) {
		return collectionApi.getFilteredByGlob("./src/posts/*.md");
	});

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
