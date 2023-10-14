const fs = require("fs");
const path = require("path");
const { jsTemplate, tsTemplate } = require("./templates");

/**
 *
 * Creates a component file as `componentName`.`type`
 * Creates a test for the created component
 * Creates a style file if `createStyles` is true
 *
 * @param {string} componentPath
 * @param {"js" | "ts"} type
 * @param {boolean} createStyles
 * @returns void
 */
function createComponent(componentPath, type, createStyles) {
  try {
    const folder = componentPath;
    const componentName = path.basename(componentPath);
    const templates = {
      ts: tsTemplate(componentName),
      js: jsTemplate(componentName),
    };

    const files = [
      { name: `${componentName}.${type === "ts" ? "tsx" : "jsx"}`, content: templates[type].component },
      { name: `${componentName}.spec.${type === "ts" ? "tsx" : "jsx"}`, content: templates[type].spec },
    ];

    if (createStyles) {
      files.push({ name: `${componentName}.css`, content: templates[type].css })
    }

    fs.mkdirSync(folder, { recursive: true });
    files.forEach((file) => {
      const filePath = path.join(folder, file.name);
      fs.writeFileSync(filePath, file.content);
    });

    console.log("Folder and files created successfully!");
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
}

module.exports = {
  createComponent
}
