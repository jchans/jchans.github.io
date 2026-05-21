import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("bundle.css");
}
