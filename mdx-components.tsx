import type { MDXComponents } from 'mdx/types'
import CodeSelector from './app/components/CodeSelector'
import SectionGuide from './app/components/SectionGuide'
import classNames from "classnames";
// import Link, { LinkProps } from "components/common/Link";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
    SectionGuide: (props: React.HTMLAttributes<HTMLDivElement>) => {
			return <SectionGuide>{props.children}</SectionGuide>;
    },
		CodeSelector: (props: React.HTMLAttributes<HTMLDivElement>) => {
			return <CodeSelector>{props.children}</CodeSelector>;
		},
		// a: (props: Omit<LinkProps, "className">) => (
		// 	<Link
		// 		prefetch={false}
		// 		className="text-blue font-semibold not-prose"
		// 		{...props}
		// 	/>
		// ),
		pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
			<pre
				{...props}
				className={classNames(
					props.className,
					"text-sm whitespace-pre-wrap leading-relaxed bg-gray-100 dark:bg-blue-darkest p-6 rounded-2xl mt-2 mb-4 group is-pre overflow-x-auto not-prose"
				)}
			/>
		),
		code: (props: Omit<React.HTMLAttributes<HTMLElement>, "className">) => (
			<code
				{...props}
				className="whitespace-pre-wrap break-words  group-[.is-pre]:break-normal not-prose"
			/>
		),
		// Allows customizing built-in components, e.g. to add styling.
		// h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
		...components,
	}
}
