const { jsTemplate, tsTemplate } = require("./templates");

/**
 *
 * Creates a component file as `componentName`.`type`
 * Creates a test for the created component
 *
 * @param {string} componentName
 * @param {"js" | "ts"} type
 * @returns void
 */
export function createComponent(componentName, type) {
	try {
		const folder = componentName;
		const templates = {
			ts: tsTemplate,
			js: jsTemplate,
		};

		const files = [
			{ name: `${componentName}.${type === "ts" ? "tsx" : "jsx"}`, content: templates[type].component },
			{ name: `${componentName}.spec.${type === "ts" ? "tsx" : "jsx"}`, content: templates[type].spec },
			{ name: `${componentName}.css`, content: templates[type].css },
		];

		fs.mkdirSync(folder);
		files.forEach((file) => {
			const filePath = path.join(folder, file.name);
			fs.writeFileSync(filePath, file.content);
		});

		console.log("Folder and files created successfully!");
	} catch (error) {
		console.error(`Something went wrong: ${error}`);
	}
}


