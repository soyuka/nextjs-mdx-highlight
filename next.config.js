const rehypePrettyCode = require('rehype-pretty-code');

const prettyOptions = {
    // Use one of Shiki's packaged themes
    theme: {
        light: "min-light",
        dark: "one-dark-pro",
    },
    // Or your own JSON theme

    // Keep the background or use a custom background color?
    keepBackground: false,
    //
    // // Callback hooks to add custom logic to nodes when visiting
    // // them.
    // onVisitLine(node) {
    //     // Prevent lines from collapsing in `display: grid` mode, and
    //     // allow empty lines to be copy/pasted
    //     if (node.children.length === 0) {
    //         node.children = [{ type: "text", value: " " }];
    //     }
    // },
    // onVisitHighlightedLine(node) {
    //     // Each line node by default has `class="line"`.
    //     node.properties.className.push("highlighted");
    // },
    // onVisitHighlightedWord(node) {
    //     // Each word node has no className by default.
    //     node.properties.className = ["word"];
    // },
};


const withMDX = require('@next/mdx')({
  // options: {
  //   rehypePlugins: [
  //     rehypePrettyCode
  //     // [rehypePrettyCode, prettyOptions],
  //   ]
  // }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
	output: "standalone",
	trailingSlash: true,
	reactStrictMode: true,
}

// const withMDX = nextMDX({
//     extension: /\.mdx$/, // We have errors inside our md files on the documentation that we should fix to use MDX instead of MarkdownIt
//
//     options: {
//         remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'matter' }]],
//         rehypePlugins: [
//             // [rehypePrism, { ignoreMissing: true, alias: {bash: ['console', 'shell', 'sh']} }],
//             // [rehypePrettyCode, prettyOptions],
//             transformCustomLinks,
//             rehypeSlug,
//             rehypeAutolinkHeadings,
//         ],
//     },
// });

module.exports = withMDX(nextConfig)
