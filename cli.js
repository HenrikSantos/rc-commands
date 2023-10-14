#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const program = require("commander");
const { jsTemplate, tsTemplate } = require("./templates");

program.version("0.0.2");

/**
 *
 * Creates a component file as `componentName`.`type`
 * Creates a test for the created component
 *
 * @param {string} componentName
 * @param {"js" | "ts"} type
 * @returns void
 */
function createComponent(componentName, type) {
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

/**
 *
 * @param {string} commandName
 * @param {string} description
 * @param {string[]} aliases
 * @param {"js" | "ts"} fileType
 * @returns void
 */
function createComponentCommand(commandName, description, aliases, fileType) {
  const command = program.command(commandName).description(description);

  if (aliases && aliases.length > 0) {
    aliases.forEach((alias) => command.alias(alias));
  }

  command.action((paramComponentName) => {
    const componentName = paramComponentName.charAt(0).toUpperCase() + paramComponentName.slice(1);
    createComponent(componentName, fileType);
  });
}

createComponentCommand("component <paramComponentName>", "Create a component", ["c", "tsc"], "ts");
createComponentCommand("js-component <paramComponentName>", "Create a js component", ["jsc"], "js");

program.parse(process.argv);
