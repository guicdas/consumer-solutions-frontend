// Static export: redirect() on "/" only works with JavaScript, so use a plain HTML redirect.
// The root layout only passes children through, so this page brings its own <html>.
export default function RootPage() {
	return (
		<html lang="en">
			<head>
				<meta httpEquiv="refresh" content="0;url=/en" />
				<link rel="canonical" href="https://www.cpcdsconsumersolutions.pt/en" />
			</head>
			<body>
				<a href="/en">Consumer Solutions</a>
			</body>
		</html>
	);
}
