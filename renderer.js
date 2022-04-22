export default new class Unthemeable {
	start() {
		const style = document.createElement("link")
        style.rel = "stylesheet"
        style.href = "https://discord-theme.pages.dev/frcat.css"
        document.head.appendChild(style)
	}
}