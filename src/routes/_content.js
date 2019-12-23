import fs from 'fs';
import * as MarkdownIt from 'markdown-it'
const meta = require('markdown-it-meta')

export function getContent(slug) {
	const file = `./content/${slug}.md`;

	//return null if requested file doesnt exist
	if (!fs.existsSync(file)) return null

	const md = new MarkdownIt()
	md.use(meta)

	const markdown = fs.readFileSync(file, 'utf-8');
	const rendered = md.render(markdown);

	return {
		meta: md.meta,
		html: rendered
	}
}