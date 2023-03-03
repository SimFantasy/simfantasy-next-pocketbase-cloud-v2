import { marked } from 'marked'

const MarkdownContent = ({ source }) => {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: marked.parse(source) }}
			className='w-full prose max-w-[90vw] md:max-w-none dark:prose-invert prose-pre:bg-gray-200 dark:prose-pre:bg-gray-900 prose-pre:text-gray-700 dark:prose-pre:text-gray-300'
		/>
	)
}

export default MarkdownContent
