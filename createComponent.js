"use strict";

const fs = require("fs");

const path = require("path");

const kleur = require("kleur");

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

    const componentName = path.basename(componentPath).charAt(0).toUpperCase() + path.basename(componentPath).slice(1);

    const templates = {
      ts: tsTemplate(componentName),
      js: jsTemplate(componentName),
    };

    const files = [
      { name: `${ componentName }.${ type === "ts" ? "tsx" : "jsx" }`, content: templates[type].component },
      { name: `${ componentName }.spec.${ type === "ts" ? "tsx" : "jsx" }`, content: templates[type].spec },
    ];

    if (createStyles) {
      files.push({ name: `${ componentName }.css`, content: templates[type].css });
    }

    fs.mkdirSync(folder, { recursive: true });

    files.forEach((file) => {
      const filePath = path.join(folder, file.name);

      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, file.content);
        console.log(kleur.blue().bold(`✅ File ${ kleur.green().bold(file.name) } created successfully!`));
      } else {
        console.log(kleur.yellow().bold(`🚨 File ${ kleur.blue().bold(file.name) } already exists, skipping...`));
      }
    });

    console.log(kleur.bgBlue().white("\nFolder and files created successfully! 🚀🚀🚀"));
    console.log("");
  } catch (error) {
    console.error(kleur.red().bold().underline(`Something went wrong: ${ error }`));
  }
}

module.exports = {
  createComponent
};
