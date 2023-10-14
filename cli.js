#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const program = require("commander");
const { createComponent } = require("./createComponent");

program.version("0.0.3");

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

  command
    .option('--no-styles', 'Skip creation of style file (css)', false)
    .action((paramComponentName, options) => {
      const createStyles = options['no-styles'] ? false : true;
      const componentName = paramComponentName.charAt(0).toUpperCase() + paramComponentName.slice(1);
      createComponent(componentName, fileType, createStyles);
    });
}

createComponentCommand("component <paramComponentName>", "Create a component", ["c", "tsc"], "ts");
createComponentCommand("js-component <paramComponentName>", "Create a js component", ["jsc"], "js");

program.parse(process.argv);
