// Structured data for search engines. "<" is escaped so translated text can never close the script tag.
export default function JsonLd({ data }: { data: object }) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...data }).replace(/</g, "\\u003c") }}
		/>
	);
}
